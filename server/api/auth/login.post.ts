import { useDB } from '../../utils/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

export default defineEventHandler(async (event) => {
  const db = useDB(event);
  const { username, password } = await readBody(event);

  const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
  const user = rows[0];

  if (!user) throw createError({ statusCode: 401, statusMessage: 'Пользователь не найден' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw createError({ statusCode: 401, statusMessage: 'Неверный пароль' });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '30d' });

  setHeader(event, 'Set-Cookie', serialize('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax'
  }));

  return { success: true, username: user.username };
});
