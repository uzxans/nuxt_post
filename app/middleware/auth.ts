// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth() // или ваша логика авторизации
  
  // Если пользователь не авторизован и идет на защищенную страницу
  if (!auth.isAuthenticated && to.path.startsWith('/dashboard')) {
    return navigateTo('/login')
  }
  
  // Если пользователь авторизован и идет на login
  if (auth.isAuthenticated && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})