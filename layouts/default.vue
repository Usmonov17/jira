<template>
  <UILoader v-if="loadingStore.isLoading" />
  <div v-else>
    <layouts-nav />
    <section class="min-h-screen bg-white dark:bg-black">
      <router-view />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';
import { useAuthStore } from '~/store/auth';
import { useLoading } from '~/store/loading';
const loadingStore = useLoading()
const authStore = useAuthStore()
onBeforeMount(() => {
  ACCOUNT.get().then(res =>
    authStore.set({
      email: res.email,
      id: res.$id,
      name: res.name,
      status: res.status
    }))
    .finally(() => loadingStore.set(false))
})
</script>