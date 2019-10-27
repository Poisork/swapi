/* eslint-disable no-restricted-globals */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll(['./favicon.ico', './manifest.json'])
    }),
  )
})

self.addEventListener('fetch', event => {
  if (event.request.url.indexOf('http') === 0) {
    event.respondWith(
      caches
        .match(event.request)
        .then(resp => {
          return (
            resp ||
            fetch(event.request).then(response => {
              const responseClone = response.clone()
              caches.open('v1').then(cache => {
                cache.put(event.request, responseClone)
              })

              return response
            })
          )
        })
        .catch(() => {
          return caches.match('./index.html')
        }),
    )
  }
})
