if(!self.define){let e,a={};const n=(n,c)=>(n=new URL(n+".js",c).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let t={};const r=e=>n(e,i),f={module:{uri:i},exports:t,require:r};a[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(s(...e),t)))}}define(["./workbox-01fd22c6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/ASEPHARYANA.png",revision:"ec67d5018d8aee5630d3d44d206b8266"},{url:"/ASEPHARYANA.svg",revision:"ac20bf06531b42db185748a06558881f"},{url:"/Logo.svg",revision:"ad6b0125b587ca1898b7a734724389c1"},{url:"/OpenApi.yaml",revision:"ceb66101e309498ffbef49a0e5c8a4bd"},{url:"/Project1.png",revision:"d066a1fffcde8d5ee7335023db7e90e2"},{url:"/Project2.png",revision:"7253c5c8bbd8f5bda8bdb0dcfa8f78e9"},{url:"/WebCompressor.png",revision:"6283e0e9d61553aeb4e7d17bd59b2d91"},{url:"/WebCompressorL.png",revision:"5127424fc28a0fb605d36ae3cbf1d82f"},{url:"/_next/app-build-manifest.json",revision:"14e8d63b04e04b67850ea358619caa44"},{url:"/_next/static/chunks/1500-46e35c622d97ef3d.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/1500-46e35c622d97ef3d.js.map",revision:"98e4a6240f745ba32b6734098f21dde5"},{url:"/_next/static/chunks/154-4857c66ba7bf18da.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/154-4857c66ba7bf18da.js.map",revision:"52724ba4f88a60c0ac7c456fc9f115da"},{url:"/_next/static/chunks/1549-5ed4b3e6b4001881.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/1549-5ed4b3e6b4001881.js.map",revision:"fddbb314f9fc0fabf4dce96099c4e4af"},{url:"/_next/static/chunks/1662-fff71ca964995f4e.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/1662-fff71ca964995f4e.js.map",revision:"51de07179360f74c48081970f828be86"},{url:"/_next/static/chunks/1794-dcb11d5c23a75550.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/1794-dcb11d5c23a75550.js.map",revision:"60ba7da5b1b7b5ed03da3b4d6ada0331"},{url:"/_next/static/chunks/1846-58b068dd25431203.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/1846-58b068dd25431203.js.map",revision:"fa3060f21a1df38bb61c8b1db3174a9b"},{url:"/_next/static/chunks/1968-035725ccfcf2d202.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/1968-035725ccfcf2d202.js.map",revision:"6dc182d4a93642ce2e8e30a503d13995"},{url:"/_next/static/chunks/3106-7ee2005001742692.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/3106-7ee2005001742692.js.map",revision:"6069d4f171949ab59f578c0b7abba78a"},{url:"/_next/static/chunks/3186-0b41c67714eae709.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/3186-0b41c67714eae709.js.map",revision:"dff080564e2e5d9a943063d626488b82"},{url:"/_next/static/chunks/3488-b95aeffb7dfb0e69.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/3488-b95aeffb7dfb0e69.js.map",revision:"2701c52fa71ababcfa4c62bc90fb825b"},{url:"/_next/static/chunks/3802-f2ad7a0440bb3359.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/3802-f2ad7a0440bb3359.js.map",revision:"8809025245674143611fcff463f26670"},{url:"/_next/static/chunks/4090-430c4051a41655a4.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/4090-430c4051a41655a4.js.map",revision:"518ed90b5f576396effb0e51afb854bb"},{url:"/_next/static/chunks/4155-400cbc66c5057a52.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/4155-400cbc66c5057a52.js.map",revision:"e81d856c6270bb88f4b1bc583bbc060e"},{url:"/_next/static/chunks/4265-8a292fe5dfa0685b.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/4265-8a292fe5dfa0685b.js.map",revision:"6bb9b341598ae258ccf10585c1ca2ccb"},{url:"/_next/static/chunks/4537-49824596c6944afe.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/4537-49824596c6944afe.js.map",revision:"b05a006ff943fd5d10e78bf08b34f7d3"},{url:"/_next/static/chunks/4902-4030bf0eb092853f.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/4902-4030bf0eb092853f.js.map",revision:"e34fdd12fef18dbe018c1230b0e6a053"},{url:"/_next/static/chunks/4934-fab04a286eec4704.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/4934-fab04a286eec4704.js.map",revision:"317472da8ae71758ee12aec0f0085c95"},{url:"/_next/static/chunks/4977-7f955507040299d6.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/4977-7f955507040299d6.js.map",revision:"768d8eba3e9d2d90c36e73441ea9ea30"},{url:"/_next/static/chunks/4987-39d4cf885ba14f7f.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/4987-39d4cf885ba14f7f.js.map",revision:"c87d8e4e5b0d5fe4cf89b92ed07919dc"},{url:"/_next/static/chunks/5078-3d89ff3e7c3c0bab.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/5078-3d89ff3e7c3c0bab.js.map",revision:"ff995c870e452adef50a5778d91d4fd5"},{url:"/_next/static/chunks/5093-dd6cb95bc82b86b1.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/5093-dd6cb95bc82b86b1.js.map",revision:"b6336af49482cb54f93bffa7251634d1"},{url:"/_next/static/chunks/524-b8861c9385cb0c54.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/524-b8861c9385cb0c54.js.map",revision:"0279a5793957c284f70eba1205cb08c4"},{url:"/_next/static/chunks/5340-d8c741f3c793da03.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/5340-d8c741f3c793da03.js.map",revision:"4d00c8d0a09f104c4e98bf109a3684bc"},{url:"/_next/static/chunks/5359-b3be92492c3f75e2.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/5359-b3be92492c3f75e2.js.map",revision:"0caf4e0a8b284c73edb59478ef4a90a3"},{url:"/_next/static/chunks/5786-d6a527becfac84ab.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/5786-d6a527becfac84ab.js.map",revision:"e0fe8712600f667ec3e2816d044a8cf8"},{url:"/_next/static/chunks/5888-24669cafe0afefc5.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/5888-24669cafe0afefc5.js.map",revision:"74b076bb2e2c537c5b1bd0ea4bf9efc8"},{url:"/_next/static/chunks/6273-7af59066e502f145.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/6273-7af59066e502f145.js.map",revision:"d21df031bb1278a93bd8a432d1fa027c"},{url:"/_next/static/chunks/6321-175cd8dabc3d68f0.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/6321-175cd8dabc3d68f0.js.map",revision:"9f2eaf190067eea015750c0e7453f714"},{url:"/_next/static/chunks/6444-8ebf26187adeb5c1.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/6444-8ebf26187adeb5c1.js.map",revision:"0f900a6153bbe07ad1bc2eb39d7c0453"},{url:"/_next/static/chunks/6471-02b3d7b699163175.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/6471-02b3d7b699163175.js.map",revision:"98addd94ad245cf43b1f001a226a0a90"},{url:"/_next/static/chunks/6484-3100ef7cffb0506c.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/6484-3100ef7cffb0506c.js.map",revision:"8c505cdac8aa798a490af29f3eed12ee"},{url:"/_next/static/chunks/6589-c038ca72e703ef40.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/6589-c038ca72e703ef40.js.map",revision:"231d9e89aefc9a1064bbd4511524fa1c"},{url:"/_next/static/chunks/6860-ff493f6914b06cb7.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/6860-ff493f6914b06cb7.js.map",revision:"db65878ddba3e3d9fd630193ce7f126b"},{url:"/_next/static/chunks/7082-d528efa20768155f.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7082-d528efa20768155f.js.map",revision:"091b04f75063878559e1ca9cd98a6268"},{url:"/_next/static/chunks/7092-122d73caaa72267d.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7092-122d73caaa72267d.js.map",revision:"275f8f53f07a678fcd91d492d48027b9"},{url:"/_next/static/chunks/7190-07314043cf6e24e4.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7190-07314043cf6e24e4.js.map",revision:"30387ea3114e4ff30fd9eddc8c844e16"},{url:"/_next/static/chunks/7455-b854725e13125f4b.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7455-b854725e13125f4b.js.map",revision:"f3e481d7dba5daaf9820606ef7b30cda"},{url:"/_next/static/chunks/7534-102a56a58f3c22cd.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7534-102a56a58f3c22cd.js.map",revision:"9255d6612655135a8197b501ffc9fe6d"},{url:"/_next/static/chunks/7583-098532dae50db371.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7583-098532dae50db371.js.map",revision:"381f420311fc0db3980e9efeee11f7fd"},{url:"/_next/static/chunks/7594-c163f51f111a9b23.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7594-c163f51f111a9b23.js.map",revision:"f5de59f26e31eeb0969d037e3cd45e5f"},{url:"/_next/static/chunks/772-798064bf661a9dbb.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/772-798064bf661a9dbb.js.map",revision:"9b1f6c4bfbd329f6b16077859dc04191"},{url:"/_next/static/chunks/7826-0a1536163beee22b.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7826-0a1536163beee22b.js.map",revision:"07b0545e09ff8b9f2fd1100cda936d94"},{url:"/_next/static/chunks/7852-2a07f48848c52dd7.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/7852-2a07f48848c52dd7.js.map",revision:"062ecf2f4b22caac31b1ef26257d4fe7"},{url:"/_next/static/chunks/8185-1cdf5d4c344237a8.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/8185-1cdf5d4c344237a8.js.map",revision:"5571737dd35b1c2f46d472b6b29c20e0"},{url:"/_next/static/chunks/8327-54485bb19e7988ee.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/8327-54485bb19e7988ee.js.map",revision:"31b1534760b3c5319f3a8ea1ab0877f2"},{url:"/_next/static/chunks/8354-0bf141655faa36d2.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/8354-0bf141655faa36d2.js.map",revision:"6d9b01b1fc9c8a4af1d7930997e20cc4"},{url:"/_next/static/chunks/8587-3baf61cd4f31f222.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/8587-3baf61cd4f31f222.js.map",revision:"d274c21ed4ea9a57a8fce402c373f6b5"},{url:"/_next/static/chunks/8613-034570a91d54ec41.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/8919-6d254e96df3e5950.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/8919-6d254e96df3e5950.js.map",revision:"3be311915e159d8a56423f6fd345b4da"},{url:"/_next/static/chunks/9152-aa51ec4d4f1d9b05.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/9152-aa51ec4d4f1d9b05.js.map",revision:"75313e4c57b2cdab9c315ce5a69c88e4"},{url:"/_next/static/chunks/9348-f618456344183fdb.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/9348-f618456344183fdb.js.map",revision:"d6ecaa8a99a851a5958a65152714e018"},{url:"/_next/static/chunks/9958-49840493886bfe5b.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/9958-49840493886bfe5b.js.map",revision:"8cd44f795f35b9b89fc04aa8933500de"},{url:"/_next/static/chunks/app/(backend)/api/anime/complete-anime/%5Bslug%5D/route-73bae38615da10a4.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/anime/detail/%5Bslug%5D/route-a7ab3a82a8f192c6.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/anime/full/%5Bslug%5D/route-151fb3148a48e7da.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/anime/ongoing-anime/%5Bslug%5D/route-5923d1c150154cd3.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/anime/route-eba2d95e66561269.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/anime/search/route-22813b236ef5dd33.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/auth/%5B...nextauth%5D/route-32ac663375df1df3.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/compress/route-0d1112549c07f109.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/docs/route-496ead24e54dbbfb.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/komik/%5Bfunction%5D/route-357d91d0c0019489.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/proxy/route-62e6fc0852ca951e.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/sosmed/comments/route-65bc5403087331a9.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/sosmed/likes/route-6913cc01e2728619.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/sosmed/posts/route-b28e7bf541c61393.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(backend)/api/uploader/%5B%5B...file%5D%5D/route-8133100077e5d845.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/complete-anime/%5Bslug%5D/loading-a2b45569975cf458.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/complete-anime/%5Bslug%5D/loading-a2b45569975cf458.js.map",revision:"bf218c8a2803492a36d7a26483019a38"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/complete-anime/%5Bslug%5D/page-28cac05b36b0b850.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/complete-anime/%5Bslug%5D/page-28cac05b36b0b850.js.map",revision:"4f55293016815651e209b287a259b037"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/detail/%5Bslug%5D/loading-de84485da7b31d87.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/detail/%5Bslug%5D/loading-de84485da7b31d87.js.map",revision:"d074e6abd23f3adfde74f76bdc601889"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/detail/%5Bslug%5D/page-5d8c4f5999f84d88.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/detail/%5Bslug%5D/page-5d8c4f5999f84d88.js.map",revision:"da12dbbca32626bbfd8336dcdfcd7ed0"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/full/%5Bslug%5D/loading-65a2e3fd8ab5d888.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/full/%5Bslug%5D/loading-65a2e3fd8ab5d888.js.map",revision:"99c718bec4bc4791e6193ef0c55ed4c0"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/full/%5Bslug%5D/page-448830836f97f215.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/full/%5Bslug%5D/page-448830836f97f215.js.map",revision:"92a2d972129f80ebc7f4046858db2e25"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/layout-a47c32d22fd12ff7.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/layout-a47c32d22fd12ff7.js.map",revision:"6bab5f517a15bf0ea36fe132db383cf2"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/ongoing-anime/%5Bslug%5D/loading-f7624b5a64ed1cd2.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/ongoing-anime/%5Bslug%5D/loading-f7624b5a64ed1cd2.js.map",revision:"16cded8b9f0d165a1484357f9776a440"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/ongoing-anime/%5Bslug%5D/page-2a192ceba85a3f39.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/ongoing-anime/%5Bslug%5D/page-2a192ceba85a3f39.js.map",revision:"16cefe2f542231bc82c522775722b8ea"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/page-f127721b86b8399c.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/page-f127721b86b8399c.js.map",revision:"aeaabe3eb8a3cf7f1edbadf1190eb15e"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/search/%5Bslug%5D/loading-9943e439da6a69ad.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/search/%5Bslug%5D/loading-9943e439da6a69ad.js.map",revision:"1b7244bb8e642294b8db7a774f52b8ee"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/search/%5Bslug%5D/page-1812275197b0c808.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(anime)/anime/search/%5Bslug%5D/page-1812275197b0c808.js.map",revision:"523cfc0b393c9a0d05eaa6e897363f42"},{url:"/_next/static/chunks/app/(frontend)/(auth)/login/page-aca03ee27de3c0e3.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/(auth)/login/page-aca03ee27de3c0e3.js.map",revision:"f2dfc33f283d87ced70c7779bb1d854c"},{url:"/_next/static/chunks/app/(frontend)/chat/page-e4004d4b1db364a9.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/chat/page-e4004d4b1db364a9.js.map",revision:"6e3f48df4b0518ceda7dc2c28cffcc1f"},{url:"/_next/static/chunks/app/(frontend)/compressor/page-b9ebd4e8e85fcc05.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/compressor/page-b9ebd4e8e85fcc05.js.map",revision:"a9208358622a151fb26d0880d7b4025f"},{url:"/_next/static/chunks/app/(frontend)/docs/page-165a987c889f1673.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/docs/page-165a987c889f1673.js.map",revision:"05828db6734c9f6b183636a9feb81553"},{url:"/_next/static/chunks/app/(frontend)/komik/chapter/%5BchapterId%5D/loading-fee6f237c24c4b5a.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/chapter/%5BchapterId%5D/loading-fee6f237c24c4b5a.js.map",revision:"353fe35078789972e682bf4de2cd2571"},{url:"/_next/static/chunks/app/(frontend)/komik/chapter/%5BchapterId%5D/page-682e43c01e05dbcb.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/chapter/%5BchapterId%5D/page-682e43c01e05dbcb.js.map",revision:"414ee7e3f51b5e27ca3faaf8607fcdf2"},{url:"/_next/static/chunks/app/(frontend)/komik/detail/%5BkomikId%5D/loading-a9971ed0a21fdfbd.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/detail/%5BkomikId%5D/loading-a9971ed0a21fdfbd.js.map",revision:"26d8a8342ac8f258d35fedc4100e2e11"},{url:"/_next/static/chunks/app/(frontend)/komik/detail/%5BkomikId%5D/page-383310b35e617577.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/detail/%5BkomikId%5D/page-383310b35e617577.js.map",revision:"2e9109d32552129a35373ccd3e01c7ee"},{url:"/_next/static/chunks/app/(frontend)/komik/layout-e42b27b4b865297c.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/layout-e42b27b4b865297c.js.map",revision:"ba90db46918a5da4056de15f26d3c123"},{url:"/_next/static/chunks/app/(frontend)/komik/loading-81a43734dd9e7671.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/loading-81a43734dd9e7671.js.map",revision:"ebf31072026afec1cf47c1fdac3e14d4"},{url:"/_next/static/chunks/app/(frontend)/komik/manga/page/%5BpageNumber%5D/loading-7aa6a95415ae4532.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/manga/page/%5BpageNumber%5D/loading-7aa6a95415ae4532.js.map",revision:"241d0659526336c8a1a0774c1908bdec"},{url:"/_next/static/chunks/app/(frontend)/komik/manga/page/%5BpageNumber%5D/page-8680842fddab585f.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/manga/page/%5BpageNumber%5D/page-8680842fddab585f.js.map",revision:"715ef309a22a8581d64aca31961398b3"},{url:"/_next/static/chunks/app/(frontend)/komik/manhua/page/%5BpageNumber%5D/loading-0a9bab8d07b175a1.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/manhua/page/%5BpageNumber%5D/loading-0a9bab8d07b175a1.js.map",revision:"8f0421874cd256a796f3fca624a81e49"},{url:"/_next/static/chunks/app/(frontend)/komik/manhua/page/%5BpageNumber%5D/page-f7d191cebfa14b6f.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/manhua/page/%5BpageNumber%5D/page-f7d191cebfa14b6f.js.map",revision:"e4dfdbff06bf9d761edcddd6676fa020"},{url:"/_next/static/chunks/app/(frontend)/komik/manhwa/page/%5BpageNumber%5D/loading-a2d738d0ef09e957.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/manhwa/page/%5BpageNumber%5D/loading-a2d738d0ef09e957.js.map",revision:"dbbf483ee8da59d6a3bbc44ddb663823"},{url:"/_next/static/chunks/app/(frontend)/komik/manhwa/page/%5BpageNumber%5D/page-9fdda9976c3f1a2e.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/manhwa/page/%5BpageNumber%5D/page-9fdda9976c3f1a2e.js.map",revision:"4119cc489010e30347376bc1a8e29a2c"},{url:"/_next/static/chunks/app/(frontend)/komik/page-0e77747ba9f49634.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/page-0e77747ba9f49634.js.map",revision:"2cf0e89ca1f781dc33a10e012b867b0b"},{url:"/_next/static/chunks/app/(frontend)/komik/search/%5Bslug%5D/%5Bpage%5D/loading-2f16c8a3eb1fb9d7.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/search/%5Bslug%5D/%5Bpage%5D/loading-2f16c8a3eb1fb9d7.js.map",revision:"8c39a6161fc8fa03d0012a23e9856a8b"},{url:"/_next/static/chunks/app/(frontend)/komik/search/%5Bslug%5D/%5Bpage%5D/page-724fa99ea6d5f413.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/komik/search/%5Bslug%5D/%5Bpage%5D/page-724fa99ea6d5f413.js.map",revision:"b26f3676d9fd3548569b6a9cd5326965"},{url:"/_next/static/chunks/app/(frontend)/project/page-7fa778c3d9b0db38.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/project/page-7fa778c3d9b0db38.js.map",revision:"5dd24bd506a3cea776da557812da8b8a"},{url:"/_next/static/chunks/app/(frontend)/sosmed/page-d9d3715325d77dd1.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/(frontend)/sosmed/page-d9d3715325d77dd1.js.map",revision:"104474ac7a30312907f4a3f91342a377"},{url:"/_next/static/chunks/app/_not-found/page-5e209c5f1a9a197d.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/layout-d0052a3ebc8254a5.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/layout-d0052a3ebc8254a5.js.map",revision:"0ea4f5a63d407bad67e7e179f3daa7dc"},{url:"/_next/static/chunks/app/not-found-29ab91131f3c367f.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/not-found-29ab91131f3c367f.js.map",revision:"ef5cb37bacb7a26cd46e5a89af4a48fb"},{url:"/_next/static/chunks/app/page-938af07e9db808c2.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/app/page-938af07e9db808c2.js.map",revision:"a29e870829b6b7dc3a0c08f13e176227"},{url:"/_next/static/chunks/main-a1870b6ca8f0960e.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/main-app-82c8a380f42ad8cb.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/main-app-82c8a380f42ad8cb.js.map",revision:"20ecfbc028f03748951f3ff6c2363297"},{url:"/_next/static/chunks/pages/_app-f667f9cf831a6e67.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/pages/_app-f667f9cf831a6e67.js.map",revision:"c7d777cf96e2c77923644c757152252d"},{url:"/_next/static/chunks/pages/_error-4c4328df62671179.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/pages/_error-4c4328df62671179.js.map",revision:"a84391eddc568c53b4c5ac149ae637c6"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-4acf06a6ef3abec6.js",revision:"lcyp7vVhoOgnC9-vbwfr5"},{url:"/_next/static/chunks/webpack-4acf06a6ef3abec6.js.map",revision:"10222ecb405bba5783a7d381b08f8865"},{url:"/_next/static/css/2ee2f17a4d432d99.css",revision:"2ee2f17a4d432d99"},{url:"/_next/static/css/2ee2f17a4d432d99.css.map",revision:"a7d22c1ef8691f6c11e4c194c503212f"},{url:"/_next/static/css/58bab2b95f4e1c30.css",revision:"58bab2b95f4e1c30"},{url:"/_next/static/css/58bab2b95f4e1c30.css.map",revision:"3736c58a37f3214801609f0b48783973"},{url:"/_next/static/css/6d5ec0d92e221d9a.css",revision:"6d5ec0d92e221d9a"},{url:"/_next/static/css/6d5ec0d92e221d9a.css.map",revision:"1eaa9990cebaeaee69f6c22fc9173401"},{url:"/_next/static/lcyp7vVhoOgnC9-vbwfr5/_buildManifest.js",revision:"1f2b5ef3741fcd4ca517c205de6949ca"},{url:"/_next/static/lcyp7vVhoOgnC9-vbwfr5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/loading.7ac6f628.webp",revision:"8b29bf0fb5440db80fa316cb04c4bd8c"},{url:"/_offline.html",revision:"a90fde6309934e886f11c152fd02dd39"},{url:"/carousel-1.svg",revision:"7ad2f7114a8c7148a1763d1b38d87bb8"},{url:"/carousel-2.svg",revision:"f4c28c56559343cca570d6a9d2537a16"},{url:"/carousel-3.svg",revision:"84a379f04c07c56183d8c88ff1c624ee"},{url:"/favicon.png",revision:"b8135d43bae74dc57e76c11602ebdeb8"},{url:"/github.svg",revision:"d2a06b01602201a2f33c6c0f399cc936"},{url:"/hmm.yaml",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/image-1.jpg",revision:"c228c5e4232b2d9fd851e46270087924"},{url:"/loading.gif",revision:"2e61942c4b2871d61c27e15f4082deee"},{url:"/loading.webp",revision:"8b29bf0fb5440db80fa316cb04c4bd8c"},{url:"/logo.png",revision:"ec3a03c6f272d8cebc5732527259fa77"},{url:"/manifest.json",revision:"0f86e61477469cbf19905305c15eb994"},{url:"/profil.jpg",revision:"9aa216f68361aee8996a37994f22f270"},{url:"/profil.png",revision:"4673a4234e3a259a7a48fa118486a34b"},{url:"/profil.svg",revision:"89a65c68a7cec92d977c68c346c4a287"},{url:"/profile-circle-svgrepo-com.svg",revision:"44e09c0b5876b2a6a0c1921ccc2fe2e4"},{url:"/profile-picture-5.jpg",revision:"9ad4a42c97ad2a496d34fbd95223d654"},{url:"/robots.txt",revision:"cdeeeeb4288384004d520a8dd26cd2fb"},{url:"/sitemap-0.xml",revision:"e03dfebef102374324a7d77582f5bdb0"},{url:"/sitemap.xml",revision:"c8c08384a7263585560bcfdc9567772c"},{url:"/vercel.svg",revision:"12854fc11fdc3d498acbb4892fc90fbb"},{url:"/webAnime.png",revision:"8cb04daf0c2750cc2f6e108412dbeec8"},{url:"/webAnimeL.png",revision:"50e4677938380fbb8380e693cffd2544"},{url:"/webChat.png",revision:"7ec2e375e23a90fa7c60e50324cb6afe"},{url:"/webChatL.png",revision:"2a73b409dced50b392ef4393b895db53"},{url:"/webKomik.png",revision:"2d61fd7156f066509c701595e08325ec"},{url:"/webKomikL.png",revision:"b131b2466a3455aeb4106f8d3804e8f3"},{url:"/websosmed.png",revision:"935b630ae2fff4a8892a87947f0568e4"},{url:"/websosmedL.png",revision:"bf287ee01e0702196f925b8202d699c5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
