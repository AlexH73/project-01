# React + TypeScript + Vite Practice Project

[![React](https://img.shields.io/badge/React-18.2-%2361DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-✓-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-✓-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://vercel.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-%237952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![ESLint](https://img.shields.io/badge/ESLint-✓-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

Практический проект для отработки навыков работы с React, TypeScript и Vite. Этот репозиторий является практическим дополнением к теоретическому курсу по [фронтенд-разработке](https://github.com/AlexH73/frontend-pro).

## 🚀 Быстрый старт

### Предварительные требования
- Node.js ≥ 16
- npm ≥ 8 или yarn
- Git

### Установка и запуск

1. **Клонирование репозитория**
   ```bash
   git clone https://github.com/AlexH73/roject-01.git
   cd roject-01
   ```

2. **Установка зависимостей**
   ```bash
   npm install
   ```

3. **Запуск в режиме разработки**
   ```bash
   npm run dev
   ```
   Приложение будет доступно по адресу: `http://localhost:5173`

4. **Сборка для production**
   ```bash
   npm run build
   ```

5. **Просмотр собранной версии**
   ```bash
   npm run preview
   ```

## 📦 Скрипты проекта

| Команда | Назначение |
|---------|------------|
| `npm install` | Установка зависимостей |
| `npm run dev` | Запуск development-сервера |
| `npm run build` | Сборка проекта для production |
| `npm run preview` | Просмотр собранной версии |
| `npm run lint` | Проверка кода с помощью ESLint |

## 🛠 Технологии

- **[React 18](https://reactjs.org/)** - библиотека для построения пользовательских интерфейсов
- **[TypeScript](https://www.typescriptlang.org/)** - статическая типизация для JavaScript
- **[Vite](https://vitejs.dev/)** - инструмент для сборки и разработки
- **[ESLint](https://eslint.org/)** - линтинг кода

## 🌐 Деплой на Vercel

Проект автоматически деплоится на Vercel при пуше в ветку `main`.

**Ручной деплой:**
1. Установите Vercel CLI: `npm i -g vercel`
2. Выполните команду: `vercel`
3. Следуйте инструкциям в терминале

**Ссылка на прод:** https://project-01-theta-rose.vercel.app/

## 📁 Структура проекта

```
src/
├── components/     # React-компоненты
├── hooks/         # Кастомные хуки
├── types/         # TypeScript-типы
├── utils/         # Вспомогательные функции
├── assets/        # Статические ресурсы
├── App.tsx        # Главный компонент
└── main.tsx       # Точка входа
```

## 🤝 Как работать с проектом

1. Создайте ветку для своей задачи: `git checkout -b feature/your-feature`
2. Внесите изменения и протестируйте их с помощью `npm run dev`
3. Добавьте изменения в git: `git add .`
4. Сделайте коммит: `git commit -m "Описание изменений"`
5. Запушьте ветку: `git push origin feature/your-feature`
6. Создайте Pull Request для ревью кода

## 📝 Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](LICENSE).

---

*Разработано в рамках практического курса по фронтенд-разработке* | [AlexH73](https://github.com/AlexH73)