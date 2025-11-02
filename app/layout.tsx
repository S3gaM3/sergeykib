import type { Metadata } from 'next'
import SmoothScroll from './components/SmoothScroll'
import './globals.css'

export const metadata: Metadata = {
  title: 'Сергей Кибальник — Веб-разработчик React, Node.js | Портфолио разработчика',
  description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI. Создаю современные сайты и веб-приложения. Портфолио проектов и резюме.',
  keywords: 'веб-разработчик, React разработчик, JavaScript разработчик, Node.js, веб-дизайн, UX/UI, портфолио, Москва, фриланс',
  authors: [{ name: 'Сергей Кибальник' }],
  openGraph: {
    type: 'website',
    url: 'https://sergeykib.github.io/',
    title: 'Сергей Кибальник — Веб-разработчик React, Node.js',
    description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI. Создаю современные сайты и веб-приложения.',
    images: ['https://sergeykib.github.io/assets/img/portfolio/1.jpg'],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сергей Кибальник — Веб-разработчик React, Node.js',
    description: 'Веб-разработчик Сергей Кибальник. Специализация: React, JavaScript, Node.js, UX/UI.',
    images: ['https://sergeykib.github.io/assets/img/portfolio/1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/assets/favicon.ico',
    apple: '/assets/favicon.ico',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;800&family=Montserrat:wght@700&family=Roboto:wght@400;500&family=Fira+Code:wght@500&display=swap" rel="stylesheet" />
        <script
          type="text/javascript"
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
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
