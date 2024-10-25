self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('cache-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                'https://files.catbox.moe/i5htqv.jpg',
                'https://files.catbox.moe/3abg1v.jpg'
                // Tambahkan file lain yang ingin dicache
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});