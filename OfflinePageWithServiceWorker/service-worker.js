const version = 1;
const cacheName = "cache-" + version;
const offlinePageUrl = "offline-page.html";
const urlsToCache = ["client.js", "style.css", offlinePageUrl];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((err) => console.error("Error Installing: ", err))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(offlinePageUrl);
      })
    );
  } else {
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => response || fetch(event.request))
    );
  }
});
