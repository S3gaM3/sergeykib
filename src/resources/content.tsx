import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Сергей",
  lastName: "Кибальник",
  name: "Сергей Кибальник",
  role: "Веб-разработчик",
  avatar: "/assets/img/portfolio/avatar.webp",
  email: "kibalnikserg@yandex.ru",
  location: "Europe/Moscow",
  languages: ["Русский", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Подписка на обновления</>,
  description: <>Новые проекты и материалы</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/S3gaM3",
    essential: true,
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/kosmosega",
    essential: true,
  },
  {
    name: "MAX",
    icon: "openLink",
    link: "https://clc.li/VmHro",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/assets/img/portfolio/pasport_competi_2.webp",
  label: "Главная",
  title: "Сергей Кибальник - React, Node.js, JavaScript, HTML5, CSS3",
  description:
    "Помогаю бизнесу запускать и развивать сайты на React и Node.js: от лендингов до веб-приложений.",
  headline: <>Создаю понятные и надежные сайты для бизнеса</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">10+ проектов</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Актуальный кейс
        </Text>
      </Row>
    ),
    href: "/work/traktir-staraya-shkola",
  },
  subline: (
    <>
      Специализируюсь на{" "}
      <Text as="span" size="xl" weight="strong">React, JavaScript, Node.js, HTML5, CSS3 и UX/UI</Text>.
      <br />
      Помогаю бизнесу расти в интернете. Работаю удаленно и в Москве.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Обо мне",
  title: `Обо мне — ${person.name}`,
  description: `Портфолио и опыт ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://t.me/kosmosega",
  },
  intro: {
    display: true,
    title: "Введение",
    description: (
      <>
            Веб-разработчик с глубоким знанием JavaScript-экосистемы. Специализируюсь на создании
            адаптивных интерфейсов на React и серверных решений на Node.js. Мои проекты сочетают
        техническую надежность и визуальную привлекательность.
      </>
    ),
  },
  work: {
    display: true,
    title: "Опыт и экспертиза",
    experiences: [
      {
        company: "Коммерческие проекты",
        timeframe: "2023 - настоящее время",
        role: "Фриланс веб-разработчик",
        achievements: [
          <>
            Разрабатываю лендинги, корпоративные сайты и веб-приложения с упором на скорость,
            адаптивность и SEO.
          </>,
          <>
            Внедряю интеграции с Telegram API и автоматизацию для уведомлений и обратной связи.
          </>,
        ],
        images: [
          {
            src: "/assets/img/portfolio/traktir.webp",
            alt: "Трактир Старая Школа",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Инженерные web-системы",
        timeframe: "2024 - 2025",
        role: "Разработка интерфейсов и кабинетов",
        achievements: [
          <>
            Реализовал проекты по автоматизированной диспетчеризации и системам управления доступом.
          </>,
          <>
            Создавал сложные формы, табличные представления данных и административные интерфейсы.
          </>,
        ],
        images: [
          {
            src: "/assets/img/portfolio/linpass.webp",
            alt: "Автоматизированная диспетчеризация",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Образование и сертификаты",
    institutions: [
      {
        name: "Технологический колледж № 21",
        description: <>09.02.07 Информационные системы и программирование, выпуск 2025.</>,
      },
      {
        name: "Яндекс Практикум и цифровой паспорт компетенций",
        description: <>JavaScript от Яндекса (144 часа), цифровой паспорт компетенций — 86%.</>,
        images: [
          {
            src: "/assets/img/portfolio/pasport_competi_1.webp",
            alt: "Цифровой паспорт компетенций — страница 1",
            width: 4,
            height: 3,
          },
          {
            src: "/assets/img/portfolio/pasport_competi_2.webp",
            alt: "Цифровой паспорт компетенций — страница 2",
            width: 4,
            height: 3,
          },
          {
            src: "/assets/img/portfolio/yandex_cert.webp",
            alt: "Сертификат JavaScript от Яндекса",
            width: 4,
            height: 3,
          },
        ],
      },
    ],
  },
  technical: {
    display: true,
    title: "Технические навыки",
    skills: [
      {
        title: "Frontend",
        description: (
          <>React, JavaScript, TypeScript, HTML5, CSS3, адаптивная верстка и UI-анимации.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
          },
          {
            name: "TypeScript",
          },
        ],
        images: [],
      },
      {
        title: "Backend и инфраструктура",
        description: (
          <>Node.js, Express, REST API, MongoDB и интеграции с внешними сервисами.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nextjs",
          },
          {
            name: "MongoDB",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Блог",
  title: "Блог о разработке и практике",
  description: `Заметки и наблюдения ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Проекты",
  title: `Проекты - ${person.name}`,
  description: `Коммерческие и учебные проекты ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Галерея",
  title: `Галерея - ${person.name}`,
  description: `Подборка материалов и сертификатов`,
  images: [
    {
      src: "/assets/img/portfolio/yandex_cert.webp",
      alt: "Сертификат JavaScript",
      orientation: "horizontal",
    },
    {
      src: "/assets/img/portfolio/pasport_competi_1.webp",
      alt: "Цифровой паспорт 1",
      orientation: "vertical",
    },
    {
      src: "/assets/img/portfolio/pasport_competi_2.webp",
      alt: "Цифровой паспорт 2",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
