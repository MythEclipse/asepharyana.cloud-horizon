import { NextResponse } from 'next/server'
import gs from 'ghostscript-node'

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file') as File

  const inputBuffer = await file.arrayBuffer()
  const compressedPDF = await gs.compressPDF(Buffer.from(inputBuffer), 'utf-8')

  return new NextResponse(compressedPDF, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="compressed.pdf"'
    }
  })
}
