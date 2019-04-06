var cacheVer ="cacheVer-ver-1.0";
//event listener, function is being called whenever a new sw is being installed
self.addEventListener('install',function(event){
    //event.waitUntil means that installation won't be excuted until what's inside it "caches.open"
    //returns a promise !
    event.waitUntil(caches.open(cacheVer)
        .then(function(cache){
            //addAll works as add but it's array to hold all files you need
            cache.addAll([
                '/',
                '/index.html',
                '/script.js',
                '/js/polyfills/fetch.js',
                '/js/polyfills/promise.js',
                '/style.css',
            ]);
        })        
    );
});
//called when the sw.js becomes active.
self.addEventListener('activate', function( event) {
    event.waitUntil(
        caches.keys()
          .then(function (keylist){
            return Promise.all(keylist.map(function(key){
              if (key !== cacheVer){
                console.log("removing old cache", key);
                return caches.delete(key);
              }
            }));
          })
      );
      return self.clients.claim();
    });
// cache first pattern
self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request)
        .then((cacheResponse)=>{
            if(cacheResponse){
                return cacheResponse;
            }
            return fetch(event.request)
            .then((fetchResponse)=>{
                return caches.open(cacheVer)
                .then((cache)=>{
                    return cache.put(event.request, fetchResponse.clone())
                    .then(()=>{
                        return fetchResponse;
                    });
                });
            });
        })
    );
})