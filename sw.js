/* Knight School service worker — caches everything on install so the app
   works with no connection at all after the first visit. */
const CACHE = 'knight-school-v1';
const FILES = [
  './', './index.html', './manifest.json',
  './icons/icon-48.png', './icons/icon-72.png', './icons/icon-96.png',
  './icons/icon-144.png', './icons/icon-192.png', './icons/icon-256.png',
  './icons/icon-512.png', './icons/maskable-192.png', './icons/maskable-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache first: the app never changes at runtime, so this is both fastest and fully offline.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
