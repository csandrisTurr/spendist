<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { ref, type Ref } from 'vue';

interface Item {
  ID: number;
  userID: number;
  date: string;
  type: 1 | 0;
  amount: number;
  tagID: number | null;
}

interface Tag {
  ID: number;
  userID: number;
  name: string;
}

const items: Ref<Item[]> = ref([
  {
    ID: 0,
    userID: 0,
    date: new Date().toISOString(),
    type: 1,
    amount: 42220,
    tagID: null,
  }
]);

const tags: Ref<Tag[]> = ref([
  {
    ID: 0,
    userID: 0,
    name: 'auto'
  }
]);

function getItems() {
}

function getTags() {
}
</script>

<template>
  <main class="w-full flex flex-col gap-8">
    <DataTable
      title="List of tags"
      :data="tags"
      :descriptors="[
        {
          displayName: 'ID',
        },
        {
          hidden: true,
        },
        {
          displayName: 'Name',
          editMode: 'text',
        }
      ]"
    />
    <DataTable
      title="List of items"
      :data="items"
      :descriptors="[
        {
          displayName: 'ID',
        },
        {
          hidden: true,
        },
        {
          displayName: 'Date',
        },
        {
          displayName: 'Type',
          transform: x => x ? 'Earning' : 'Spending',
        },
        {
          displayName: 'Amount',
        },
        {
          displayName: 'Tag',
          transform: x => x ? x : '-',
        },
      ]"
    />
  </main>
</template>

<style lang="scss" scoped>
.title {
  @apply text-3xl font-bold mb-4;
}

section > div {
  @apply flex flex-col ;
}

tr {
  &, th, td {
    @apply text-center p-4 border-zinc-800 border-[1px];
  }

  td:nth-child(4) {
    @apply text-right;
  }
}
</style>