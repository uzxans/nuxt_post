import { useDB } from '../../utils/db';

export default defineEventHandler(async (event) => {
  const db = useDB(event);
  const { username, name } = await readBody(event);

  try {
    const [result] = await db.execute(
      'INSERT INTO users (username, name) VALUES (?, ?)',
      [username, name]
    );
    return { success: true, id: result.insertId };
  } catch (err) {
    console.error(err);
    throw createError({ statusCode: 500, statusMessage: 'Ошибка добавления поста' });
  }
});
