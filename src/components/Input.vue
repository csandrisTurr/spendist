<script lang="ts" setup>
defineProps(['type', 'name', 'id', 'placeholder']);
const textModel = defineModel();
const emit = defineEmits(['pressedEnter']);

function handleKeypress(e: KeyboardEvent) {
  if (e.key == 'Enter') {
    emit('pressedEnter');
  }
}
</script>

<template>
    <input @keypress="handleKeypress" :type="type" :name="name" :id="id" v-model="textModel" :placeholder="placeholder"
        class="p-2 rounded-sm bg-zinc-900 text-zinc-400 selection:bg-emerald-400 selection:text-zinc-900 shadow-none border-none outline-none"
    >
</template>