<template>
  <div>
    <h1>Documents page</h1>
  </div>
</template>

<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';
import { useAuthStore } from '~/store/auth';
import { useLoading } from '~/store/loading';

const loadingStore = useLoading()
const router = useRouter()
const authStore = useAuthStore()
onMounted(() => {
  ACCOUNT.get()
    .then((res) => {
      loadingStore.set(false)
      authStore.set({
        email: res.email,
        id: res.$id,
        name: res.name,
        status: res.status
      })
    })
    .catch(() => router.push("/auth"))

})

definePageMeta({ layout: "documents" });
useHead({
  title: 'Documents | Jira',
})
</script>