<script lang="ts" setup>
import { computed } from 'vue';
import Icon from './Icon.vue';
import { $$, $ref } from 'vue/macros';
import { useRouter } from 'vue-router';

const routeMap = {
    'register': 'how_to_reg',
    'calendar': 'calendar_month',
};

const publicRoutes = ['login', 'register'];

function capitalize(str: string): string {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function toIcon(str: keyof typeof routeMap): string {
    return routeMap[str] || str;
}

const routes = computed(
    () => useRouter().getRoutes().filter(x =>
        publicRoutes.indexOf(x.name as string) != -1
        )
    );
</script>

<template>
    <nav class="flex flex-col border-r-zinc-800 border-r-[1px] p-4 gap-4">
        <span class="text-emerald-500 font-mono font-bold text-2xl w-full text-center">spendist</span>
        <hr class="border-zinc-700 w-5/6 self-center">
        <div class="flex flex-col gap-2">
            <RouterLink
                v-for="route in routes"
                :key="route.name"
                :to="route.path"
                class="flex items-center gap-2 px-4 py-2 rounded-md text-zinc-300 ease-in-out hover:bg-zinc-900 duration-300 text-lg"
            >
                <Icon>{{ toIcon(route.name as keyof typeof routeMap) }}</Icon>
                <span>{{ capitalize(route.name as string) }}</span>
            </RouterLink>
        </div>
    </nav>
</template>

<style lang="scss" scope>
</style>