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
    image: "linear-gradient(45deg, #7C3AED 0%, #38B2AC 100%)",
    liveUrl: "https://old-sc.ru/",
    repoUrl: "https://github.com/S3gaM3/oldschool_bar",
    technologies: ["HTML5", "CSS3", "JavaScript", "Telegram Bot API"]
  },
  {
    title: "Автоматизированная диспетчеризация & управление доступом",
    desc: "Система автоматизированной диспетчеризации и управления доступом для предприятий",
    image: "linear-gradient(135deg, #38B2AC 0%, #7C3AED 100%)",
    liveUrl: "https://linpass.ru/",
    repoUrl: "https://github.com/S3gaM3/dip",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"]
  },
  {
    title: "Mindbox Todo App",
    desc: "Приложение для управления задачами с современным интерфейсом, созданное в рамках обучения в Mindbox",
    image: "linear-gradient(90deg, #7C3AED 0%, #A78BFA 50%, #38B2AC 100%)",
    liveUrl: "https://s3gam3.github.io/mindbox-todo-app/",
    repoUrl: "https://github.com/S3gaM3/mindbox-todo-app",
    technologies: ["TypeScript", "React", "CSS3", "Git"]
  },
  {
    title: "Warehouse Management System",
    desc: "Система управления складом с инвентаризацией, отслеживанием товаров и аналитикой",
    image: "linear-gradient(180deg, #38B2AC 0%, #7C3AED 100%)",
    liveUrl: "https://github.com/S3gaM3/warehouse",
    repoUrl: "https://github.com/S3gaM3/warehouse",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"]
  },
  {
    title: "Library Management System",
    desc: "Система управления библиотекой с каталогом книг, поиском и управлением читателями",
    image: "linear-gradient(225deg, #7C3AED 0%, #38B2AC 100%)",
    liveUrl: "https://github.com/S3gaM3/library",
    repoUrl: "https://github.com/S3gaM3/library",
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    title: "Cookies Management App",
    desc: "Приложение для управления cookies с настройками безопасности и удобным интерфейсом",
    image: "linear-gradient(270deg, #38B2AC 0%, #7C3AED 100%)",
    liveUrl: "https://s3gam3.github.io/cookies/",
    repoUrl: "https://github.com/S3gaM3/cookies",
    technologies: ["JavaScript", "HTML5", "CSS3", "Web APIs"]
  },
  {
    title: "Cross - Магазин кроссовок",
    desc: "Сайт магазина кроссовок с каталогом товаров, адаптивным дизайном и современным интерфейсом",
    image: "linear-gradient(315deg, #7C3AED 0%, #A78BFA 50%, #38B2AC 100%)",
    liveUrl: "https://s3gam3.github.io/Cross/",
    repoUrl: "https://github.com/S3gaM3/Cross",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    title: "Pindie - Frontend",
    desc: "Фронтенд часть проекта Pindie - платформы для инди-разработчиков игр",
    image: "linear-gradient(0deg, #38B2AC 0%, #7C3AED 100%)",
    liveUrl: "https://github.com/S3gaM3/Final-Pindie-Front",
    repoUrl: "https://github.com/S3gaM3/Final-Pindie-back",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"]
  },
  {
    title: "Pindie - Backend",
    desc: "Бэкенд часть проекта Pindie с API для управления данными и пользователями",
    image: "linear-gradient(60deg, #7C3AED 0%, #38B2AC 50%, #7C3AED 100%)",
    liveUrl: "https://github.com/S3gaM3/Final-Pindie-back",
    repoUrl: "https://github.com/S3gaM3/Final-Pindie-back",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST API"]
  }
];
