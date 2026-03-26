const CACHE_NAME = 'site-cache-v2';
const ASSETS = [
  '/',
  '/assets/img/portfolio/1.webp',
  '/manifest.json'
];

// Домены, которые Service Worker НЕ должен перехватывать
const EXTERNAL_DOMAINS = [
  'mc.yandex.ru',
  'yandex.ru',
  'google-analytics.com',
  'googletagmanager.com',
  'doubleclick.net',
  'googleadservices.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .catch((err) => console.warn('SW install failed:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null))
        )
      )
      .catch((err) => console.warn('SW activate failed:', err))
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Пропускаем все запросы к внешним доменам
  if (EXTERNAL_DOMAINS.some(domain => url.hostname.includes(domain))) {
    return; // Не перехватываем - пусть браузер обрабатывает сам
  }
  
  // Пропускаем не-GET запросы
  if (request.method !== 'GET') {
    return;
  }
  
  // Пропускаем запросы к API routes
  if (url.pathname.startsWith('/api/')) {
    return;
  }
  
  // Обрабатываем только запросы к нашему домену
  if (url.origin !== self.location.origin) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cached) => {
        if (cached) {
          return cached;
        }
        
        return fetch(request)
          .then((response) => {
            // Кешируем только успешные ответы
            if (response && response.status === 200 && response.type === 'basic') {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  try {
                    cache.put(request, responseToCache);
                  } catch (err) {
                    console.warn('SW cache put failed:', err);
                  }
                })
                .catch((err) => console.warn('SW cache open failed:', err));
            }
            return response;
          })
          .catch((err) => {
            console.warn('SW fetch failed:', err);
            // Возвращаем кешированный ответ только если есть
            return cached || new Response('Network error', { status: 408 });
          });
      })
      .catch((err) => {
        console.warn('SW cache match failed:', err);
        return fetch(request).catch(() => new Response('Offline', { status: 503 }));
      })
  );
});


