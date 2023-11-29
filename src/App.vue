<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';

function isAuthenticated(): boolean {
  
}
</script>

<template>
  <Sidebar />

  <RouterView class="p-4" />
</template>

<style scoped>
</style>
