<template>
  <layouts-nav />
  <section class="min-h-screen bg-white dark:bg-black">
    <router-view />
  </section>
</template>

<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore()
onBeforeMount(() => {
  ACCOUNT.get().then(res =>
    authStore.set({
      email: res.email,
      id: res.$id,
      name: res.name,
      status: res.status
    }))
})
</script>