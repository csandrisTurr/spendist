<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const currentUser = userStore.getUser();
</script>

<template>
  <main class="flex flex-col gap-4 items-center justify-center w-full">
    <span class="font-bold text-3xl">User Information</span>
    <table class="w-1/3 max-w-md">
      <tr>
        <td>ID</td>
        <td>{{ currentUser['id'] }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ currentUser['name'] }}</td>
      </tr>
      <tr>
        <td>E-mail</td>
        <td>{{ currentUser['email'] }}</td>
      </tr>
      <tr>
        <td>Password</td>
        <td class="blur hover:blur-none duration-200">{{ currentUser['password'] }}</td>
      </tr>
    </table>
  </main>
</template>

<style lang="scss">
tr td {
  @apply p-4 border-zinc-800 border-[1px];
}

tr td:nth-child(1) {
  @apply font-bold text-center;
}
</style>