export default defineNuxtConfig({
    app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in',
    }
  },
  runtimeConfig: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
  }
})
