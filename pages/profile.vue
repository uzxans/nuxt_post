<script setup lang="ts">
// Restrict access if `auth` middleware is present in the project
definePageMeta({ middleware: 'auth' })

// Fetch current user information; expecting `{ login: string }`
const { data: me, pending, error } = await useFetch<{ login?: string }>(
  '/api/auth/me'
)
</script>

<template>
  <div class="profile-page">
    <div class="profile-content">
      <div v-if="pending" class="status">Loading...</div>
      <div v-else-if="error" class="status">Failed to load profile.</div>
      <!-- Add any other profile content above -->
    </div>

    <footer class="profile-footer">
      <span v-if="me && me.login">{{ me.login }}</span>
    </footer>
  </div>
</template>

<style scoped>
.profile-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.profile-content {
  flex: 1 1 auto;
}

.profile-footer {
  margin-top: auto;
  padding: 16px 0;
  color: #666;
}

.status {
  color: #888;
}
</style>
