import { useDB } from '../../utils/db';
import { getRouterParam } from 'h3';

export default defineEventHandler(async (event) => {
  const db = useDB(event);
  const id = getRouterParam(event, 'id');
  const { username, name } = await readBody(event);

  try {
    await db.execute(
      'UPDATE users SET username = ?, name = ? WHERE id = ?',
      [username, name, id]
    );
    return { success: true };
  } catch (err) {
    console.error(err);
    throw createError({ statusCode: 500, statusMessage: 'Ошибка редактирования поста' });
  }
});
