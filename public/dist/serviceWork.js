const CACHE_Parqueadero = 'ParqueaderoV1';
let urlCache = [
    '../',
    '../styles.css',
    '../dist',
    '../auth.js',
    '../dashboard.html',
    '../dashboard.js',
    '../index.html',
    '../login.html',
    '../manifest.json',
    '../package.json',
    '../script.js',
    '../users.js',
    '../vehicles.js',
    '../work.js',
]
self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open(CACHE_Parqueadero)
            .then(cache =>{
                return cache.addAll(urlCache)
                    .then(()=>{
                        self.skipWaiting();
                        cache
                    });

            })
            .catch(err =>{
                console.error("No se ha registrado la cache"+err);
            })

    );

});

self.addEventListener("activate", event =>{
    async function deletOldCaches() {
        const names = await caches.keys();
        await Promise.all(names.map(name => {
            if (name !== CACHE_Parqueadero) {
                //if a cache's name is the current name, delete it.
                return caches.delete(name);
            }
        }));
        
    }
    event.waitUntil(deletOldCaches());
    self.clients.claim();
});

self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((r) =>{
            console.log("[Servicio Worker] obteniendo el recurso: " + e.request.url);
            return (
                r ||
                fetch(e.request).then((response) =>{
                    return caches.open(CACHE_Parqueadero).then((Cache) =>{
                        console.log(
                            "[Servicio Worker] Almacena el nuevo Producto: " + e.request.url
                    );
                    cache.put(e.request, response.clone());
                    return response;
                });
            })
            );
        })
    );
});