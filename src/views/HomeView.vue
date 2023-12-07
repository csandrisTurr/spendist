<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue';
</script>

<template>
  <main class="w-full">
    <section class="grid gap-4 grid-rows-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
      <HomeCard title="Osszes bevetel" value="304 683 Ft" />
      <HomeCard title="Osszes kiadas" value="95 332 Ft" />
      <HomeCard title="30 napos bevetel" value="20 000 Ft" />
      <HomeCard title="30 napos kiadas" value="30 215 Ft" />
    </section>
  </main>
</template>
