import type { Metadata } from 'next'
import SmoothScroll from './components/SmoothScroll'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sergeykib.github.io'),
  title: {
    default: 'Сергей Кибальник — Веб-разработчик React, Node.js | Портфолио разработчика',
    template: '%s | Сергей Кибальник',
  },
  description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI. Создаю современные сайты и веб-приложения. Портфолио проектов и резюме. Разработка под ключ, фриланс, Москва.',
  keywords: [
    'веб-разработчик',
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
  authors: [{ name: 'Сергей Кибальник', url: 'https://sergeykib.github.io' }],
  creator: 'Сергей Кибальник',
  publisher: 'Сергей Кибальник',
  category: 'Портфолио разработчика',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://sergeykib.github.io/',
    siteName: 'Сергей Кибальник — Портфолио',
    title: 'Сергей Кибальник — Веб-разработчик React, Node.js',
    description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI. Создаю современные сайты и веб-приложения под ключ.',
    images: [
      {
        url: 'https://sergeykib.github.io/assets/img/portfolio/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Сергей Кибальник — Веб-разработчик',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сергей Кибальник — Веб-разработчик React, Node.js',
    description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI. Создаю современные сайты и веб-приложения.',
    images: ['https://sergeykib.github.io/assets/img/portfolio/1.jpg'],
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
    canonical: 'https://sergeykib.github.io/',
    languages: {
      'ru-RU': 'https://sergeykib.github.io/',
    },
  },
  icons: {
    icon: [
      { url: '/assets/favicon.ico', sizes: 'any' },
      { url: '/assets/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/assets/favicon.ico',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code', // Замените на ваш код при настройке Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/assets/img/portfolio/1.jpg" imagesrcset="/assets/img/portfolio/1.jpg 1x" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;800&family=Montserrat:wght@700&family=Roboto:wght@400;500&family=Fira+Code:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(e){console.warn('SW reg failed', e)});
                });
              }
            `
          }}
        />
        {/* Yandex Metrika after interactive to avoid blocking rendering */}
        <script
          id="ym-loader"
          type="text/javascript"
          defer
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103955852', 'ym');
              ym(103955852, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/103955852" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
