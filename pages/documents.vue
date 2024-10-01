<template>
  <div class="grid grid-cols-4 gap-2 mt-12">
    <UButton
      class="w-full h-10"
      color="blue"
      variant="outline"
      v-for="(item, index) in status"
      :key="index"
    >
      <div class="flex items-center space-x-2 justify-between">
        <span class="font-bold">{{ item.name }}</span>
        <span class="text-sm text-neutral-500">2</span>
      </div>
    </UButton>
  </div>
</template>

<script setup lang="ts">
import { status } from "~/constants";
import { ACCOUNT } from "~/libs/appwrite";
import { useStatusQuery } from "~/query/query";
import { useAuthStore } from "~/store/auth";
import { useLoading } from "~/store/loading";

const loadingStore = useLoading();
const router = useRouter();
const authStore = useAuthStore();
onMounted(() => {
  ACCOUNT.get()
    .then((res) => {
      loadingStore.set(false);
      authStore.set({
        email: res.email,
        id: res.$id,
        name: res.name,
        status: res.status,
      });
    })
    .catch(() => router.push("/auth"));
});

const {data} = useStatusQuery();

definePageMeta({ layout: "documents" });
useHead({
  title: "Documents | Jira",
});
</script>
