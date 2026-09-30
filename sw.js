'use strict';
// Bump RELEASE whenever any shipped app file changes.
const RELEASE = '2026-09-30-1';
const PREFIX = 'forge-shell-' + self.registration.scope;
const CACHE = PREFIX + RELEASE;
const APP = new URL('./index.html', self.registration.scope).href;
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(path => new Request(new URL(path, self.registration.scope), {cache:'reload'})))));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if(event.request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  // Cache only our app shell; never intercept other repositories on this origin.
  const path = url.pathname.slice(new URL(self.registration.scope).pathname.length);
  if(event.request.mode === 'navigate' && (path === '' || path === 'index.html')) {
    event.respondWith(caches.open(CACHE).then(cache => cache.match(APP)).then(response => response || fetch(event.request)));
  } else if(FILES.slice(2).some(file => new URL(file, self.registration.scope).pathname === url.pathname)) {
    event.respondWith(caches.open(CACHE).then(cache => cache.match(event.request, {ignoreSearch:true})).then(response => response || fetch(event.request)));
  }
});
