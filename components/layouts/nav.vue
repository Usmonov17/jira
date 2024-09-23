import { NuxtImg, NuxtLink } from '../../.nuxt/components';
<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 z-50 py-6">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center space-x-1">
        <NuxtImg src="/logo.svg" alt="logo" width="50" height="50" />
        <span class="text-2xl font-medium">Jira Software</span>
      </NuxtLink>
      <div class="flex items-center space-x-2">
        <SharedDarkMode />
        <NuxtLink to="/auth">
          <UButton color="blue" variant="outline">Get it Free </UButton>
        </NuxtLink>
        <NuxtLink to="/auth">
          <UButton color="blue" variant="soft">Sign In</UButton>
        </NuxtLink>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">
</script>
