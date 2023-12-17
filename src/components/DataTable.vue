<script setup lang="ts">
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';

defineProps({
    'title': String,
    'data': {  
        required: true,
        type: Array<Object>,
    },
    'headers': Array<String>,
    'displayMap': Object,
});
</script>

<template>
    <section class="w-full flex flex-col gap-4">
        <span class="flex justify-between">
        <span class="title">{{ title }}</span>
            <Button class="self-center px-4">Insert record</Button>
        </span>
        <table class="w-full">
            <tr>
                <th v-for="header in headers" :key="(header as string)">{{ header }}</th>
                <th>Actions</th>
            </tr>
            <tr v-for="item in data" :key="(item as any)['ID']">
                <td v-for="(v, k) in item" :key="k">{{ v }}</td>
                <td class="flex gap-4">
                    <Button type="secondary"><Icon>edit</Icon></Button>
                    <Button type="warning"><Icon>delete</Icon></Button>
                </td>
            </tr>
            <tr v-if="data.length == 0">
                <td colspan="4">
                <div class="text-zinc-600 flex flex-col justify-center items-center">
                    <Icon class="text-6xl">question_mark</Icon>
                    <span class="font-semibold">There's nothing here yet!</span>
                    <span>Why not add a few new records?</span>
                </div>
                </td>
            </tr>
        </table>
    </section>
</template>

<style lang="scss" scoped>
.title {
  @apply text-3xl font-bold mb-4;
}

tr {
  &, th, td {
    @apply text-center p-4 border-zinc-800 border-[1px];
  }

  td {
    width: auto;
  }

  td:last-child, th:last-child {
    width: 1%;
    min-width: min-content;
    white-space: nowrap;
    border: none;
  }

  td:nth-child(4) {
    @apply text-right;
  }
}
</style>