if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>s(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-6eb0c6b7.css",revision:null},{url:"assets/index-a2d8dff7.js",revision:null},{url:"index.html",revision:"45179fcd78e69ce7abd5cba9be82e117"},{url:"registerSW.js",revision:"9f73561a98ae0b0c43c511c5ff628c87"},{url:"favicon.ico",revision:"c11996ab25437d5cd81edca06d51d19c"},{url:"apple-touch-icon.png",revision:"93a2b49117e40e06360759d28f6ae453"},{url:"pwa-192x192.png",revision:"52e9fe1690222f54a84171649b12db0a"},{url:"pwa-512x512.png",revision:"e8e51862b374bafbde896037243cc914"},{url:"manifest.webmanifest",revision:"d3ecc5bb5e077f76f07f58996d4ed89a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));