export default defineEventHandler((event) => {
  if (!event.context.user) {
    throw createError({ statusCode: 401, statusMessage: 'Не авторизован' });
  }
  return { user: event.context.user };
});
