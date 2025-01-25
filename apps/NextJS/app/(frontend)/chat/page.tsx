'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { format } from 'date-fns';
import Card from '@/components/card/ThemedCard';
import { Textarea } from '@/components/text/textarea';
import Button from '@/components/button/NormalButton';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

type ChatMessage = {
  id: string;
  user: string;
  text?: string;
  email: string;
  imageProfile: string;
  role: string;
  timestamp: number;
  imageMessage?: string;
};

export default function ChatClient() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const wsRef = useRef<ReconnectingWebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // WebSocket Management
  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const ws = new ReconnectingWebSocket(`${protocol}//ws.asepharyana.cloud`);

    wsRef.current = ws;

    const handleOpen = () => {
      setIsConnected(true);
      setError(null);
    };

    const handleMessage = (event: MessageEvent) => {
      const parsedData = JSON.parse(event.data);

      const message: ChatMessage = {
        id: parsedData.id || Date.now().toString(),
        user: parsedData.user || `User${Math.floor(Math.random() * 1000)}`,
        text: parsedData.text,
        email: parsedData.email || '',
        imageProfile:
          parsedData.imageProfile || '/profile-circle-svgrepo-com.svg',
        imageMessage: parsedData.imageMessage || '',
        role: parsedData.role || 'guest',
        timestamp: parsedData.timestamp || Date.now(),
      };

      setMessages((prev) => [...prev, message]);
    };

    const handleError = () => setError('Connection error. Reconnecting...');
    const handleClose = () => setIsConnected(false);

    ws.addEventListener('open', handleOpen);
    ws.addEventListener('message', handleMessage);
    ws.addEventListener('error', handleError);
    ws.addEventListener('close', handleClose);

    return () => {
      ws.removeEventListener('open', handleOpen);
      ws.removeEventListener('message', handleMessage);
      ws.removeEventListener('error', handleError);
      ws.removeEventListener('close', handleClose);
      ws.close();
    };
  }, []);

  // Auto-scroll and textarea resize
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [messages, inputValue, scrollToBottom]);

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  // Upload image and get URL
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsUploading(true);
      const response = await fetch('/api/uploader', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  // Message sending handler
  const handleSend = useCallback(async () => {
    if ((!inputValue.trim() && !imageFile) || isSending) return;

    setIsSending(true);
    setError(null);

    try {
      let imageUrl = '';
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
        setImageFile(null);
      }

      const messagePayload = {
        user: session?.user?.name || 'Anonymous',
        text: inputValue,
        email: session?.user?.email || 'anonymous@example.com',
        imageProfile: session?.user?.image || '/profile-circle-svgrepo-com.svg',
        role: 'user',
        imageMessage: imageUrl,
      };

      wsRef.current?.send(JSON.stringify(messagePayload));
      setInputValue('');
    } catch (err) {
      setError('Failed to send message');
    } finally {
      setIsSending(false);
    }
  }, [inputValue, session, isSending, imageFile]);

  // Keyboard handling
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className='container mx-auto py-8 px-4 max-w-2xl'>
      <h1 className='text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center'>
        Chat Room
      </h1>

      <Card>
        <div className='flex items-center justify-between text-sm p-4 border-b'>
          <span>Status:</span>
          <div className='flex items-center gap-2'>
            <div
              className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}
            />
            <span className={isConnected ? 'text-green-500' : 'text-red-500'}>
              {isConnected ? 'Connected' : 'Connecting...'}
            </span>
          </div>
        </div>

        <div className='h-96 overflow-y-auto p-4 space-y-3'>
          {messages.map((message) => (
            <MessageBubble
              key={`${message.id}-${message.timestamp}`}
              message={message}
              isOwn={message.email === session?.user?.email}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className='p-4 border-t'>
          <div className='relative'>
            <Textarea
              ref={textAreaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Type a message...'
              className='pr-20 resize-none'
              rows={1}
              disabled={!isConnected}
            />
            <input
              type='file'
              onChange={handleFileChange}
              className='mt-2'
              disabled={!isConnected || isUploading}
            />
            <Button
              onClick={handleSend}
              disabled={!isConnected || isSending || isUploading}
              className='absolute right-3 bottom-3 gap-1.5'
            >
              {isSending || isUploading ? (
                <Loader2 className='w-4 h-4 animate-spin' />
              ) : (
                'Send'
              )}
            </Button>
          </div>
          {error && (
            <div className='text-red-500 text-sm mt-2 text-center'>{error}</div>
          )}
        </div>
      </Card>
    </div>
  );
}

function MessageBubble({
  message,
  isOwn,
}: {
  message: ChatMessage;
  isOwn: boolean;
}) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex items-start gap-3 max-w-[85%] ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <Image
          src={message.imageProfile}
          alt={message.user}
          width={32}
          height={32}
          className='rounded-full object-cover'
        />
        <div
          className={`p-3 rounded-lg ${isOwn ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
        >
          <div className='flex items-center gap-2 mb-1'>
            <span className='text-xs font-medium'>
              {isOwn ? 'You' : message.user}
            </span>
            <span className='text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-full'>
              {message.role}
            </span>
          </div>

          {message.text && (
            <div className='whitespace-pre-wrap break-words'>
              {message.text}
            </div>
          )}

          {message.imageMessage && (
            <div className='mt-2'>
              <Image
                src={message.imageMessage}
                alt='Sent content'
                width={300}
                height={200}
                className='rounded-lg max-w-full h-auto object-cover'
                quality={80}
              />
            </div>
          )}

          <div className='text-xs mt-1 opacity-70'>
            {format(new Date(message.timestamp), 'HH:mm')}
          </div>
        </div>
      </div>
    </div>
  );
}
