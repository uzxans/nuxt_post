<!-- @format -->

<!-- layouts/default.vue -->
<template>
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>

    <body>
      <div class="item_container">
        <Header />
        <Sidebar />
        <slot />
      </div>
      <Footer />
    </body>
  </html>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.css",
    },
    {
      rel: "stylesheet",
      href: "/css/main.css",
    },
    {
      rel: "stylesheet",
      href: "/accets/fonts/style.css",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/flatpickr",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/ru.js",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
    },
    {
      src: "/accets/js/jquery-3.7.1.min.js",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.js",
    },
    {
      src: "/accets/js/main.js",
    },
  ],
});

onMounted(() => {
  if (typeof window !== "undefined" && window.flatpickr) {
    window.flatpickr("#datepicker", {
      dateFormat: "Y-m-d",
      locale: "ru",
    });
  }
});
</script>
