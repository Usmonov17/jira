<template>
  <main>
    <LayoutsDocumentsNav />
    <LayoutsDashboard />
    <section class="min-h-screen bg-white dark:bg-black pl-[20%] pt-16">
      <div class="p-4">
        <router-view />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>
