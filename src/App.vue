<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Icon from './components/Icon.vue';

function isAuthenticated(): boolean {
  
}
</script>

<template>
  <Sidebar />

  <RouterView class="p-4" />

  <div class="absolute right-8 bottom-8 h-16 w-16 bg-emerald-500 rounded-full flex justify-center items-center shadow">
    <Icon class="text-3xl">add</Icon>
  </div>
</template>

<style scoped>
</style>
