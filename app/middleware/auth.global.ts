export default defineNuxtRouteMiddleware(async (to) => {
  // Сохраняем список страниц, которые нужно защитить
  const protectedPages = ['/dashboard'];

  if (!protectedPages.some(page => to.path.startsWith(page))) return;

  try {
    // Проверяем на сервере, авторизован ли пользователь
    await $fetch('/api/auth/me', { method: 'GET', credentials: 'include' });
  } catch {
    // Если не авторизован — редирект на логин
    return navigateTo('/login');
  }
});
