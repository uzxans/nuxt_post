// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  // Защищаем все маршруты, начинающиеся с /dashboard
  if (to.path.startsWith("/dashboard")) {
    try {
      const { data, error } = await useFetch("/api/auth/me", {
        credentials: "include", // передаём cookie
      });

      // Если нет данных о пользователе или ошибка — редиректим
      if (error.value || !data.value?.user) {
        return navigateTo("/login");
      }
    } catch {
      return navigateTo("/login");
    }
  }
});
