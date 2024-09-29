<template>
  <UILoader v-if="loadingStore.isLoading" />
  <div v-else class="flex items-center justify-center h-screen w-full relative">
    <NuxtImg src="/bg-auth.jpg" class="absolute inset-0 w-full h-full object-cover z-10" />
    <div class="absolute inset-0 w-full h-full z-20 dark:bg-black/40 bg-white/40"></div>
    <UCard class="z-50 w-[50%] relative" :ui="{ body: { base: 'flex gap-4' } }">
      <div class="flex-1 space-y-4">
        <h1 class="text-2xl font-bold">{{ isLogin ? 'Login' : 'Register' }}</h1>
        <p class="opacity-70">
          {{ isLogin ?
            'Please use the following credentials to login'
            : 'Please use the following credentials to register' }}
        </p>
        <AuthLogin v-if="isLogin" :toogleLogin="toogleLogin" />
        <AuthRegister v-else :toogleLogin="toogleLogin" />
      </div>
      <UDivider laber="OR" orientation="vertical" class="w-fit" />
      <div class="space-y-4 flex flex-col justify-center flex-1">
        <UButton color="black" block size="lg">
          <Icon name="mdi:github" class="w-5 h-5" />
          <span>Login with GitHub</span>
        </UButton>
        <UButton color="black" block size="lg">
          <Icon name="ri:google-fill" class="w-5 h-5" />
          <span>Login with Google</span>
        </UButton>
      </div>
    </UCard>
  </div>
</template>
<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';
import { useLoading } from '~/store/loading';
import { onMounted } from 'vue';
const loadingStore = useLoading()
const router = useRouter()
const isLogin = ref(true);
const toogleLogin = () => {
  isLogin.value = !isLogin.value
}

onMounted(() => {
  ACCOUNT.get()
    .then(() => router.push('/'))
    .catch(() => loadingStore.set(false))
}),

  definePageMeta({ layout: "auth" });
useHead({
  title: 'Authorization | Jira',
})
</script>
