<script setup lang="ts">
import ValueCard from '@/components/ValueCard.vue';
</script>

<template>
  <main class="w-full">
    <section class="grid gap-4 grid-rows-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
      <ValueCard title="Osszes bevetel" value="304 683 Ft" />
      <ValueCard title="Osszes kiadas" value="95 332 Ft" />
      <ValueCard title="30 napos bevetel" value="20 000 Ft" />
      <ValueCard title="30 napos kiadas" value="30 215 Ft" />
    </section>
  </main>
</template>
