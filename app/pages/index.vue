<!-- @format -->

<!-- pages/index.vue -->
<template>
  <header class="header">
    <nav class="nav">
      <NuxtLink to="/" class="logo">Мой сайт</NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/about">О нас</NuxtLink>
        <NuxtLink to="/contact">Контакты</NuxtLink>
        <NuxtLink to="/users">Пользователи</NuxtLink>
      </div>
    </nav>
  </header>
  <div class="home">
    <section class="hero">
      <h1>Добро пожаловать!</h1>
      <p>Это главная страница вашего приложения</p>
      <button @click="navigateToAbout" class="btn">Войти</button>
    </section>

    <section class="features">
      <h2>Наши возможности</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Функция 1</h3>
          <p>Описание первой функции</p>
        </div>
        <div class="feature-card">
          <h3>Функция 2</h3>
          <p>Описание второй функции</p>
        </div>
        <div class="feature-card">
          <h3>Функция 3</h3>
          <p>Описание третьей функции</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const navigateToAbout = () => {
  navigateTo("/login");
};

definePageMeta({
  layout: false,
});
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  background: white;
  color: #667eea;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.features h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.header {
  background-color: #333;
  color: white;
  padding: 1rem 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  color: #ccc;
}
</style>
