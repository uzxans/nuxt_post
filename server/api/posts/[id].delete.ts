import { useDB } from '../../utils/db';
import { getRouterParam } from 'h3';

export default defineEventHandler(async (event) => {
  const db = useDB(event);
  const id = getRouterParam(event, 'id');

  try {
    await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return { success: true };
  } catch (err) {
    console.error(err);
    throw createError({ statusCode: 500, statusMessage: 'Ошибка удаления поста' });
  }
});
