// src/service-worker.js
const CACHE_NAME = 'rasa-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/*.css',
  '/assets/*.js'
  // Add other assets you want to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
