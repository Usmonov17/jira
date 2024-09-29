<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 z-50 py-6">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center space-x-1">
        <NuxtImg src="/logo.svg" alt="logo" width="50" height="50" />
        <span class="text-2xl font-medium">Jira Software</span>
      </NuxtLink>
      <div class="flex items-center space-x-2">
        <SharedDarkMode />
        <template v-if="authStore.currentUser.status">
          <UButton color="red" class="font-bold" @click="logOut">Log out</UButton>
          <NuxtLink to="/documents">
            <UButton color="blue" variant="outline" class="font-bold">Documents</UButton>
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink to="/auth">
            <UButton color="blue" variant="outline">Get it Free </UButton>
          </NuxtLink>
          <NuxtLink to="/auth">
            <UButton color="blue" variant="soft">Sign In</UButton>
          </NuxtLink>
        </template>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';
import { useAuthStore } from '~/store/auth';
import { useLoading } from '~/store/loading';
const authStore = useAuthStore();
const router = useRouter()

const loadingStore = useLoading()

const logOut = async () => {
  try {
    loadingStore.set(true);
    await ACCOUNT.deleteSession('current');
    router.push('/auth');
    authStore.clear();
    loadingStore.set(false);
  } catch (error) { }
}
</script>
