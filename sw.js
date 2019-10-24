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
 
 
    event.respondWith( 
      caches.match(event.request).then((resp) => {
        console.log(resp)
        return resp || fetch(event.request).then((response) => {
          return caches.open('v1').then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });