<!-- @format -->
<template>
  <div>
    <h1>Посты</h1>

    <!-- Форма добавления -->
    <form @submit.prevent="addPost" class="mb-4 flex gap-2">
      <input
        v-model="form.username"
        type="text"
        placeholder="Имя пользователя"
        class="border p-2 rounded"
      />
      <input
        v-model="form.name"
        type="text"
        placeholder="Заголовок поста"
        class="border p-2 rounded"
      />
      <button type="submit" class="px-3 py-1 bg-green-500 text-white rounded">
        Добавить
      </button>
    </form>

    <!-- Ошибки и загрузка -->
    <div v-if="pending" class="text-gray-500">⏳ Загрузка...</div>
    <div v-else-if="error" class="text-red-500">⚠️ {{ error.message }}</div>

    <!-- Список постов -->
    <ul v-else>
      <li v-for="post in posts" :key="post.id" class="flex gap-2 items-center">
        <input
          v-model="post.username"
          class="border p-1 rounded w-32"
          @change="updatePost(post)"
        />
        <input
          v-model="post.name"
          class="border p-1 rounded flex-1"
          @change="updatePost(post)"
        />
        <button
          @click="deletePost(post.id)"
          class="px-2 py-1 bg-red-500 text-white rounded"
        >
          Удалить
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts, pending, error, refresh } = await useFetch("/api/posts", {
  transform: (res) => res.posts || [],
  default: () => [],
});

const form = reactive({
  username: "",
  name: "",
});

// ➕ Добавление
async function addPost() {
  await $fetch(" /api/posts", {
    method: "POST",
    body: form,
  });
  form.username = "";
  form.name = "";
  await refresh(); // перезагружаем список
}

// ✏️ Редактирование
async function updatePost(post) {
  await $fetch(`/api/posts/${post.id}`, {
    method: "PUT",
    body: {
      username: post.username,
      name: post.name,
    },
  });
}

// ❌ Удаление
async function deletePost(id) {
  await $fetch(`/api/posts/${id}`, { method: "DELETE" });
  await refresh();
}
</script>
