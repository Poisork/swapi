console.log(self,'self')

self.addEventListener("activate", event => {
    console.log(event,'activate')
  });

self.addEventListener('install', function(event) {
    console.log(event,'install')
  });

self.addEventListener('fetch', function(event) {
    console.log(event,'fetch')
});