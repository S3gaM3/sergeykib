export interface Project {
  title: string;
  desc: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Трактир Старая Школа",
    desc: "Современный сайт для трактира с атмосферой старой школы. Включает меню, галерею, бронирование столиков и автоматические уведомления в Telegram",
    image: "/assets/img/portfolio/Трактир Старая Школа.webp",
    liveUrl: "https://old-sc.ru/",
    repoUrl: "https://github.com/S3gaM3/oldschool_bar",
    technologies: ["HTML5", "CSS3", "JavaScript", "Telegram Bot API"]
  },
  {
    title: "Автоматизированная диспетчеризация & управление доступом",
    desc: "Система автоматизированной диспетчеризации и управления доступом для предприятий",
    image: "/assets/img/portfolio/Автоматизированная диспетчеризация & управление доступом.webp",
    liveUrl: "https://linpass.ru/",
    repoUrl: "https://github.com/S3gaM3/dip",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"]
  },
  {
    title: "Mindbox Todo App",
    desc: "Приложение для управления задачами с современным интерфейсом, созданное в рамках обучения в Mindbox",
    image: "/assets/img/portfolio/Mindbox Todo App.webp",
    liveUrl: "https://s3gam3.github.io/mindbox-todo-app/",
    repoUrl: "https://github.com/S3gaM3/mindbox-todo-app",
    technologies: ["TypeScript", "React", "CSS3", "Git"]
  },
  {
    title: "Warehouse Management System",
    desc: "Система управления складом с инвентаризацией, отслеживанием товаров и аналитикой",
    image: "/assets/img/portfolio/Warehouse Management System.webp",
    liveUrl: "https://github.com/S3gaM3/warehouse",
    repoUrl: "https://github.com/S3gaM3/warehouse",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"]
  },
  {
    title: "Library Management System",
    desc: "Система управления библиотекой с каталогом книг, поиском и управлением читателями",
    image: "/assets/img/portfolio/Library Management System.webp",
    liveUrl: "https://github.com/S3gaM3/library",
    repoUrl: "https://github.com/S3gaM3/library",
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    title: "Cookies Management App",
    desc: "Приложение для управления cookies с настройками безопасности и удобным интерфейсом",
    image: "/assets/img/portfolio/Cookies Management App.webp",
    liveUrl: "https://s3gam3.github.io/cookies/",
    repoUrl: "https://github.com/S3gaM3/cookies",
    technologies: ["JavaScript", "HTML5", "CSS3", "Web APIs"]
  },
  {
    title: "Cross - Магазин кроссовок",
    desc: "Сайт магазина кроссовок с каталогом товаров, адаптивным дизайном и современным интерфейсом",
    image: "/assets/img/portfolio/Cross - Магазин кроссовок.webp",
    liveUrl: "https://s3gam3.github.io/Cross/",
    repoUrl: "https://github.com/S3gaM3/Cross",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    title: "Pindie - Frontend",
    desc: "Фронтенд часть проекта Pindie - платформы для инди-разработчиков игр",
    image: "/assets/img/portfolio/Pindie - Frontend.webp",
    liveUrl: "https://github.com/S3gaM3/Final-Pindie-Front",
    repoUrl: "https://github.com/S3gaM3/Final-Pindie-back",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"]
  },
  {
    title: "Pindie - Backend",
    desc: "Бэкенд часть проекта Pindie с API для управления данными и пользователями",
    image: "/assets/img/portfolio/Pindie - Backend.webp",
    liveUrl: "https://github.com/S3gaM3/Final-Pindie-back",
    repoUrl: "https://github.com/S3gaM3/Final-Pindie-back",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST API"]
  }
];
