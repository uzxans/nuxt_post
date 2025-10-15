import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export default defineEventHandler((event) => {
  const cookies = parse(event.node.req.headers.cookie || '');
  const token = cookies.token;

  if (!token) {
    // Пользователь не авторизован
    event.context.user = null;
    return;
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    event.context.user = user; // сохраняем данные пользователя
  } catch {
    event.context.user = null; // токен невалидный
  }
});
