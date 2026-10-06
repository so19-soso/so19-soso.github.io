const C='bookdb-v1',A=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin||e.request.method!=='GET')return;
e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)))});
