const cacheName = "Portfolio";
const staticAssets = [
  "./",
  "./index.html",
  "./main-js.js",
  "./site.webmanifest",
  "./css.css",
  "./page-nav.js",
  "./Images/covidtracker.jpg",
  "./Images/ABHIYellow.jpg",
  "./Images/apple-touch-icon.png",
  "./Images/portfolio2.jpg",
  "./Images/todo.png",
  "./Images/firstportfolio.png",
  "./Images/portfolio3.jpg",
  "./Images/logo1.png",
  "./Images/portfolio12.jpg",
  "./Images/responsivewhite.png",
  "./Images/designwhite.png",
  "./Images/codewhite.png",
  "./Images/Expensemanager.png",
  "./Images/weather-app.png"
];
self.addEventListener("install", async (e) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  self.Clients.claim();
});

self.addEventListener("fetch", async (e) => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
