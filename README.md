# Складской учет

## Установка

До запуска фронтенд приложения запустите бек
<https://github.com/Ramil-Akhmetov/stock_manager_back>

Установите зависимости

```bash
npm install
```

Если сервер был запущен не на <http://localhost:8000/api> необходимо изменить файл "vite.config.ts"

```ts
__API__: JSON.stringify('http://....'),
```

Запуск локального сервера через консоль

```bash
npm run dev
```

### Учетная запись администратора

email: <admin@email.com>

пароль: password

### Учетная запись Ответственного лица

email: <responsible@email.com>

пароль: password

### Учетная запись Кладовщика

email: <keeper@email.com>

пароль: password

Для всех учетных записей по умолчанию пароль password

--------
