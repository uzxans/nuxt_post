<!-- @format -->

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();

// Проверяем, авторизован ли пользователь при заходе на страницу
onMounted(async () => {
  try {
    const res = await $fetch("/api/auth/me", { method: "GET", credentials: "include" });
    if (res.user) {
      router.push("/dashboard/profile"); // редирект, если уже авторизован
    }
  } catch {
    // не авторизован — остаёмся на странице логина
  }
});

async function login() {
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: { username: username.value, password: password.value },
      credentials: "include", // важно для отправки cookie
    });
    router.push("/dashboard/profile"); // редирект после успешного входа
  } catch (err: any) {
    errorMessage.value = err?.statusMessage || "Ошибка входа";
  }
}
</script>

<template>
  <div class="max-w-sm mx-auto mt-20 p-6 border rounded">
    <h1 class="text-2xl mb-4">Вход в CRM</h1>

    <div v-if="errorMessage" class="text-red-500 mb-2">{{ errorMessage }}</div>

    <input v-model="username" placeholder="Логин" class="border p-2 w-full mb-2" />
    <input
      v-model="password"
      type="password"
      placeholder="Пароль"
      class="border p-2 w-full mb-4"
    />

    <button
      @click="login"
      class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
    >
      Войти
    </button>
  </div>
</template>
