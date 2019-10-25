console.log(self,'self')

self.addEventListener("activate", event => {
   // console.log(event,'activate')
  });

  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          './favicon.ico', 
          './manifest.json'
        ]);
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    if(event.request.url.indexOf('http') === 0){
        event.respondWith(
            caches.match(event.request).then((resp) => {
              return resp || fetch(event.request).then((response) => {
                let responseClone = response.clone();
                caches.open('v1').then((cache) => {
                  cache.put(event.request, responseClone);
                });
        
                return response;
              });
            }).catch(() => {
              return caches.match('./index.html');
            })
          );
    }
 
  });