// Offline cache for the airplane parts app. Bump VERSION when any cached file changes.
const VERSION = 'airplane-v2';
const FILES = [
  './airplane.html',
  './airplane.webmanifest',
  './airplane-icons/icon-192.png',
  './airplane-icons/icon-512.png',
  './airplane-icons/icon-maskable-512.png',
  './airplane-icons/apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('airplane-') && k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Network first so updates show up when online; fall back to the cache offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
