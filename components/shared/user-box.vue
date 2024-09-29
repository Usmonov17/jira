<template>
  <UPopover :popper="{ placement: 'left' }">
    <UAvatar :alt="currentUser.name" size="lg" class="uppercase border-2 border-blue-500" />
    <template #panel>
      <div class="p-2 w-72 bg-white dark:bg-black">
        <p class="text-neutral-600 text-sm">{{ currentUser.email }}</p>
        <div class="flex items-center  mt-3 space-x-2">
          <div class="rounded-lg bg-white-300 p-1 dark:bg-gray-900">
            <UAvatar :alt="currentUser.name" class="uppercase" />
          </div>
          <p class="capitalize text-[16px]">{{ currentUser.name }}'s documents</p>
        </div>
        <UDivider class="my-3" />
        <NuxtLink to="/profile">
          <UButton color="blue" variant="ghost" class="w-full">Profile</UButton>
        </NuxtLink>
        <UButton color="red" variant="ghost" class="w-full" @click="logOut">Log out</UButton>

      </div>
    </template>
  </UPopover>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
import { ACCOUNT } from '~/libs/appwrite';
import { useLoading } from '~/store/loading';
const authStore = useAuthStore();
const { currentUser } = useAuthStore()
const loadingStore = useLoading()
const router = useRouter()

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