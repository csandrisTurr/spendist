<script setup lang="ts">
import ValueCard from '@/components/ValueCard.vue';
</script>

<template>
  <main class="w-full">
    <section class="grid gap-4 grid-rows-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
      <ValueCard title="All earnings" value="304 683 Ft" />
      <ValueCard title="All spendings" value="95 332 Ft" />
      <ValueCard title="30 day earnings" value="20 000 Ft" />
      <ValueCard title="30 day spendings" value="30 215 Ft" />
    </section>
  </main>
</template>
