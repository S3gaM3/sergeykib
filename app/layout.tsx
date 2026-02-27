import type { Metadata, Viewport } from 'next'
import SmoothScroll from './components/SmoothScroll'
import ChatWidget from './components/ChatWidget'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://segak.ru'),
  title: {
    default: 'Сергей Кибальник — React, Node.js, JavaScript, HTML5, CSS3',
    template: '%s | Сергей Кибальник',
  },
  description: 'Разработка сайтов на React и Node.js от 10 000 ₽. Лендинги, корпоративные сайты, веб-приложения — в срок, под ключ. 10+ проектов. Веб-разработчик Сергей Кибальник, Москва и удалённо.',
  keywords: [
    'веб-разработчик',
    'JavaScript',
    'HTML5',
    'CSS3',
    'React разработчик',
    'JavaScript разработчик',
    'Node.js разработчик',
    'веб-дизайн',
    'UX/UI дизайн',
    'портфолио разработчика',
    'Москва разработчик',
    'фриланс веб-разработка',
    'React разработка',
    'Node.js разработка',
    'TypeScript разработчик',
    'Frontend разработчик',
    'Backend разработчик',
    'Fullstack разработчик',
    'веб-приложения',
    'создание сайтов',
    'разработка сайтов под ключ'
  ],
  authors: [{ name: 'Сергей Кибальник', url: 'https://segak.ru/' }],
  creator: 'Сергей Кибальник',
  publisher: 'Сергей Кибальник',
  category: 'Портфолио разработчика',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://segak.ru/',
    siteName: 'Сергей Кибальник — Портфолио',
    title: 'Сергей Кибальник — React, Node.js, JavaScript, HTML5, CSS3',
    description: 'Разработка сайтов на React и Node.js от 10 000 ₽. Лендинги, корпоративные сайты — в срок, под ключ. Веб-разработчик Сергей Кибальник, Москва.',
    images: [
      {
        url: 'https://segak.ru/assets/img/portfolio/1.webp',
        width: 1200,
        height: 630,
        alt: 'Сергей Кибальник — Веб-разработчик',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сергей Кибальник — React, Node.js, JavaScript, HTML5, CSS3',
    description: 'Разработка сайтов на React и Node.js от 10 000 ₽. Лендинги, корпоративные сайты — в срок. Веб-разработчик Сергей Кибальник, Москва.',
    images: ['https://segak.ru/assets/img/portfolio/1.webp'],
    creator: '@kosmosega',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://segak.ru/',
    languages: {
      'ru-RU': 'https://segak.ru/',
    },
  },
  icons: {
    icon: [
      { url: '/assets/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/assets/favicon.ico', sizes: 'any' },
      { url: '/assets/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/assets/favicon.ico',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code', // Замените на ваш код при настройке Google Search Console
    yandex: '6c3da113c5f70d25',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* DNS prefetch и preconnect для внешних ресурсов */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* Preload критических ресурсов */}
        <link rel="preload" as="image" href="/assets/img/portfolio/1.webp" />
        
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var url = new URL(window.location.href);
                  var pathname = url.pathname.replace(/\\/+/g, '/');
                  if (pathname === '/index' || pathname === '/index/') {
                    pathname = '/';
                  }
                  var search = url.search === '?' ? '' : url.search;
                  if (pathname !== url.pathname || search !== url.search) {
                    url.pathname = pathname;
                    url.search = search;
                    window.location.replace(url.toString());
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <SmoothScroll />
        <main>
          {children}
        </main>
        <ChatWidget />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered:', registration.scope);
                    })
                    .catch(function(e) {
                      console.warn('SW registration failed:', e);
                    });
                  
                  // Отключаем старые Service Workers при необходимости
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (let registration of registrations) {
                      if (registration.active && registration.active.scriptURL.includes('sw.js')) {
                        // Проверяем версию через update
                        registration.update();
                      }
                    }
                  });
                });
              }
            `
          }}
        />
        {/* Yandex Metrika: загружаем по событию first interaction или в idle */}
        <script
          id="ym-loader"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var loadYM = function(){
                  if (window.__ymLoaded) return; window.__ymLoaded = true;
                  (function(m,e,t,r,i,k,a){
                    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                  })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103955852', 'ym');
                  ym(103955852, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
                };
                var scheduled = false;
                var schedule = function(){ if (scheduled) return; scheduled = true; setTimeout(loadYM, 3000); };
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(loadYM, { timeout: 5000 });
                } else {
                  window.addEventListener('load', schedule, { once: true });
                }
                ['click','keydown','touchstart','scroll'].forEach(function(evt){
                  window.addEventListener(evt, schedule, { once: true, passive: true });
                });
                if (navigator.connection && navigator.connection.saveData) {
                  // Не грузим метрику при экономии трафика
                  window.__ymLoaded = true;
                }
              })();
            `,
          }}
        />
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://mc.yandex.ru/watch/103955852" style={{position:'absolute', left:'-9999px'}} alt="Счётчик посещений Яндекс.Метрики" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
