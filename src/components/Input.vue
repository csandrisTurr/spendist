<script lang="ts" setup>
defineProps(['type', 'name', 'id', 'placeholder']);
const textModel = defineModel();
</script>

<template>
    <input :type="type" :name="name" :id="id" v-model="textModel" :placeholder="placeholder"
        class="p-2 rounded-sm bg-zinc-900 text-zinc-400 outline-emerald-500 selection:bg-emerald-400 selection:text-zinc-900 shadow-none border-none"
    >
</template>