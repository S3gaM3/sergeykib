import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { nbsp } from "@/utils/typographyRu";
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
  title: <>Рассылка</>,
  description: <>Не&nbsp;используется (блок отключён).</>,
};

const social: Social = [
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
  title: "Сергей Кибальник — веб-разработка, React, Node.js",
  description: `Портфолио веб-разработчика: React, Node.js, JavaScript. Учебные и${nbsp}личные проекты, без${nbsp}коммерческого опыта.`,
  headline: <>Веб-разработка: React, JavaScript, Node.js</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Проекты в&nbsp;портфолио</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Пример{nbsp}работы
        </Text>
      </Row>
    ),
    href: "/work/traktir-staraya-shkola",
  },
  subline: (
    <>
      Стек:{" "}
      <Text as="span" size="xl" weight="strong">
        React, JavaScript, TypeScript, Node.js, HTML5, CSS3
      </Text>
      .
      <br />
      Москва, удалённый формат. Коммерческих заказов не&nbsp;было: учебные работы и&nbsp;небольшие
      задачи для&nbsp;знакомых за&nbsp;символическую оплату.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Обо мне",
  title: `Обо мне — ${person.name}`,
  description: `Кратко о${nbsp}${person.name}: образование, стек, проекты без${nbsp}коммерческого опыта`,
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
        Веб-разработка: клиент на&nbsp;React, сервер на&nbsp;Node.js, языки JavaScript
        и&nbsp;TypeScript. Коммерческого опыта нет. В&nbsp;портфолио&nbsp;— учебные работы
        и&nbsp;пет-проекты; отдельно&nbsp;— несколько сайтов для&nbsp;знакомых за символическую
        оплату (не&nbsp;рыночные заказы).
      </>
    ),
  },
  work: {
    display: true,
    title: "Практика",
    experiences: [
      {
        company: `Учебные и${nbsp}личные проекты`,
        timeframe: "2023—настоящее время",
        role: "Веб-разработка",
        achievements: [
          <>
            Учебные задания, дипломные и&nbsp;тренировочные проекты; выкладка в&nbsp;открытое
            портфолио.
          </>,
          <>
            Сайты для&nbsp;знакомых: символическая оплата, без&nbsp;договоров и&nbsp;коммерческой
            модели. Лендинги, простые витрины, формы, базовый SEO.
          </>,
          <>Интеграции по&nbsp;мере задачи (в&nbsp;т.&nbsp;ч. уведомления, Telegram API).</>,
        ],
        images: [
          {
            src: "/assets/img/portfolio/traktir.webp",
            alt: "Трактир «Старая школа»",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: `Интерфейсы для${nbsp}учебных задач`,
        timeframe: "2024—2025",
        role: "Frontend",
        achievements: [
          <>
            Учебно-практические работы: интерфейсы к&nbsp;темам диспетчеризации и&nbsp;управления
            доступом.
          </>,
          <>Формы, таблицы, административные экраны, работа с&nbsp;состоянием и&nbsp;валидацией.</>,
        ],
        images: [
          {
            src: "/assets/img/portfolio/linpass.webp",
            alt: "Интерфейс учебного проекта",
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
        name: `Технологический колледж${nbsp}№${nbsp}21`,
        description: (
          <>09.02.07 «Информационные системы и&nbsp;программирование», выпуск&nbsp;2025.</>
        ),
      },
      {
        name: "Яндекс Практикум и цифровой паспорт компетенций",
        description: (
          <>
            JavaScript от&nbsp;Яндекса (144&nbsp;ч), цифровой паспорт компетенций&nbsp;— 86&nbsp;%.
          </>
        ),
        images: [
          {
            src: "/assets/img/portfolio/pasport_competi_1.webp",
            alt: "Цифровой паспорт компетенций, страница 1",
            width: 4,
            height: 3,
          },
          {
            src: "/assets/img/portfolio/pasport_competi_2.webp",
            alt: "Цифровой паспорт компетенций, страница 2",
            width: 4,
            height: 3,
          },
          {
            src: "/assets/img/portfolio/yandex_cert.webp",
            alt: "Сертификат курса JavaScript, Яндекс",
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
        description: <>React, JavaScript, TypeScript, HTML5, CSS3, адаптивная вёрстка.</>,
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
        title: "Backend",
        description: <>Node.js, Express, REST API, MongoDB.</>,
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
  title: "Заметки",
  description: `MDX-страницы о${nbsp}настройке этого сайта и${nbsp}стеке.`,
};

const work: Work = {
  path: "/work",
  label: "Проекты",
  title: `Проекты — ${person.name}`,
  description: `Учебные и${nbsp}личные проекты ${person.name}${nbsp}(без${nbsp}коммерческого опыта)`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Галерея",
  title: `Галерея — ${person.name}`,
  description: `Сертификат курса и${nbsp}страницы цифрового паспорта компетенций.`,
  images: [
    {
      src: "/assets/img/portfolio/yandex_cert.webp",
      alt: "Сертификат курса JavaScript",
      orientation: "horizontal",
    },
    {
      src: "/assets/img/portfolio/pasport_competi_1.webp",
      alt: "Цифровой паспорт компетенций, страница 1",
      orientation: "vertical",
    },
    {
      src: "/assets/img/portfolio/pasport_competi_2.webp",
      alt: "Цифровой паспорт компетенций, страница 2",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
