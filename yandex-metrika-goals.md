# Настройка целей в Яндекс.Метрике для портфолио

## 🎯 Цель 1: Переходы на резюме

### Настройка:
1. В Яндекс.Метрике перейдите в **"Цели"** → **"Добавить цель"**
2. **Название цели**: "Переход на резюме"
3. **Тип цели**: Переход по ссылке
4. **Условие**: URL содержит `resume.html`
5. **Описание**: Отслеживает переходы пользователей на страницу резюме

### Код для отслеживания:
```javascript
// Добавьте в JavaScript для отслеживания кликов по кнопке "Резюме"
document.querySelector('a[href="resume.html"]').addEventListener('click', function() {
    ym(103955852, 'reachGoal', 'resume_view');
});
```

---

## 🎯 Цель 2: Клики по контактам

### Настройка:
1. **Название цели**: "Клик по контактам"
2. **Тип цели**: Переход по ссылке
3. **Условие**: URL содержит `mailto:` или `t.me`
4. **Описание**: Отслеживает клики по email и Telegram

### Код для отслеживания:
```javascript
// Отслеживание кликов по email
document.querySelector('a[href^="mailto:"]').addEventListener('click', function() {
    ym(103955852, 'reachGoal', 'contact_email');
});

// Отслеживание кликов по Telegram
document.querySelector('a[href*="t.me"]').addEventListener('click', function() {
    ym(103955852, 'reachGoal', 'contact_telegram');
});
```

---

## 🎯 Цель 3: Просмотр портфолио

### Настройка:
1. **Название цели**: "Просмотр портфолио"
2. **Тип цели**: Переход по ссылке
3. **Условие**: URL содержит `segak.ru`
4. **Описание**: Отслеживает переходы на основной сайт портфолио

### Код для отслеживания:
```javascript
// Отслеживание переходов на портфолио
document.querySelector('a[href*="segak.ru"]').addEventListener('click', function() {
    ym(103955852, 'reachGoal', 'portfolio_view');
});
```

---

## 🎯 Цель 4: Просмотр сертификатов

### Настройка:
1. **Название цели**: "Просмотр сертификатов"
2. **Тип цели**: Переход по ссылке
3. **Условие**: URL содержит `assets/img/portfolio/`
4. **Описание**: Отслеживает просмотры сертификатов

### Код для отслеживания:
```javascript
// Отслеживание просмотров сертификатов
document.querySelectorAll('.cert-modal-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        ym(103955852, 'reachGoal', 'certificate_view');
    });
});
```

---

## 🎯 Цель 5: Время на сайте

### Настройка:
1. **Название цели**: "Время на сайте > 2 мин"
2. **Тип цели**: Время на сайте
3. **Условие**: Больше 120 секунд
4. **Описание**: Отслеживает заинтересованных пользователей

---

## 🎯 Цель 6: Просмотр проектов

### Настройка:
1. **Название цели**: "Просмотр проектов"
2. **Тип цели**: Переход по ссылке
3. **Условие**: URL содержит `github.com` или live demo
4. **Описание**: Отслеживает интерес к проектам

### Код для отслеживания:
```javascript
// Отслеживание переходов на GitHub проекты
document.querySelectorAll('a[href*="github.com"]').forEach(function(link) {
    link.addEventListener('click', function() {
        ym(103955852, 'reachGoal', 'project_github');
    });
});

// Отслеживание переходов на live demo
document.querySelectorAll('a[href*="live"]').forEach(function(link) {
    link.addEventListener('click', function() {
        ym(103955852, 'reachGoal', 'project_demo');
    });
});
```

---

## 📊 Дополнительные настройки

### 1. **Сегменты пользователей**
- Создайте сегмент "Заинтересованные работодатели"
- Условие: Время на сайте > 2 минуты + просмотр резюме

### 2. **A/B тестирование**
- Тестируйте разные заголовки страниц
- Сравнивайте конверсии по разным вариантам

### 3. **Отчеты по целям**
- Настройте регулярные отчеты
- Отслеживайте динамику конверсий

---

## 🚀 Реализация в HTML

Добавьте этот код в конец `<body>` вашего `index.html`:

```html
<script>
// Отслеживание целей Яндекс.Метрики
document.addEventListener('DOMContentLoaded', function() {
    
    // Цель: Переход на резюме
    document.querySelector('a[href="resume.html"]').addEventListener('click', function() {
        ym(103955852, 'reachGoal', 'resume_view');
    });
    
    // Цель: Клик по email
    document.querySelector('a[href^="mailto:"]').addEventListener('click', function() {
        ym(103955852, 'reachGoal', 'contact_email');
    });
    
    // Цель: Клик по Telegram
    document.querySelector('a[href*="t.me"]').addEventListener('click', function() {
        ym(103955852, 'reachGoal', 'contact_telegram');
    });
    
    // Цель: Просмотр сертификатов
    document.querySelectorAll('.cert-modal-trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            ym(103955852, 'reachGoal', 'certificate_view');
        });
    });
    
    // Цель: Переход на портфолио
    document.querySelector('a[href*="segak.ru"]').addEventListener('click', function() {
        ym(103955852, 'reachGoal', 'portfolio_view');
    });
});
</script>
```

---

## ✅ Проверка работы

1. **Откройте сайт** и выполните действия
2. **Проверьте в Яндекс.Метрике** раздел "Цели"
3. **Убедитесь**, что цели срабатывают
4. **Настройте отчеты** для регулярного мониторинга

После настройки целей вы сможете точно отслеживать, какие действия пользователей приводят к контактам и потенциальным предложениям о работе!
