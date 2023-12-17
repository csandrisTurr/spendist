<script setup lang="ts">
const props = defineProps({
    'type': {
        default: 'primary',
        type: String,
    }
});

const buttonTypeMap = {
    'primary': 'bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600',
    'secondary': 'bg-zinc-500 hover:bg-zinc-400 active:bg-zinc-600',
    'warning': 'bg-red-500 hover:bg-red-400 active:bg-red-600',
};
</script>

<template>
    <button
        class="font-bold rounded-sm p-2 ease-out duration-200 flex items-center justify-center"
        :class="buttonTypeMap[type as keyof typeof buttonTypeMap]"
        ><slot /></button>
</template>