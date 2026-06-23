// Nettverk-først, ingen langtidscache av app-skall. Bumpes ved hver utgivelse.
const C="tl-v5";
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(
  caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.clients.claim())
)});
self.addEventListener("fetch",e=>{
  e.respondWith(
    fetch(e.request).then(r=>{
      const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r;
    }).catch(()=>caches.match(e.request))
  );
});
