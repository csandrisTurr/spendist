<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Icon from './components/Icon.vue';
</script>

<template>
  <Sidebar />

  <RouterView class="p-4" />

  <RouterLink
    to="/newdata" 
    class="absolute right-8 bottom-8 h-16 w-16 bg-emerald-500 rounded-full flex justify-center items-center shadow"
    v-if="($router.getRoutes().find(x => x.name == 'newdata')?.meta['displayOnRoutes'] as any[]).includes($route.name)">
    <Icon class="text-3xl">add</Icon>
  </RouterLink>
</template>

<style scoped>
</style>
