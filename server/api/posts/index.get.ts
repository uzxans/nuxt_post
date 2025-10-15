import { useDB } from '../../utils/db';

export default defineEventHandler(async (event) => {
  const db = useDB(event);

  try {
    const [rows] = await db.execute('SELECT * FROM users');
    return { posts: rows };
  } catch (err) {
    console.error(err);
    throw createError({ statusCode: 500, statusMessage: 'Ошибка получения постов' });
  }
});
