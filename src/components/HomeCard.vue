<script setup lang="ts">
defineProps(['title', 'value']);
</script>

<template>
    <div class="flex flex-col bg-zinc-900 p-6 rounded-md shadow-lg">
        <span class="text-lg">{{ title }}</span>
        <span class="font-bold text-4xl">{{ value }}</span>
    </div>
</template>