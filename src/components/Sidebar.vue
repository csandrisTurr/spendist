<script lang="ts" setup>
import { computed } from 'vue';
import Icon from './Icon.vue';
import { $$, $ref } from 'vue/macros';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import router from '@/router';

const userStore = useUserStore();
const classes = "flex items-center gap-2 px-4 py-2 rounded-md ease-in-out duration-300 text-lg";

function capitalize(str: string): string {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

const routes = computed(() => router.getRoutes().filter(x => {
    return (x.meta['public'] && !userStore.loggedIn()) ||
           (!x.meta['public'] && userStore.loggedIn());
}));

function logout() {
    userStore.setUser(null);
    router.push('login');
}
</script>

<template>
    <nav class="flex flex-col border-r-zinc-800 border-r-[1px] p-4 gap-4 min-w-[200px]">
        <span class="text-emerald-500 font-mono font-bold text-3xl w-full text-center title">spendist</span>
        <hr class="border-zinc-700 w-5/6 self-center">
        <div class="flex flex-col gap-2 h-full">
            <RouterLink
                v-for="route in routes"
                :key="route.name"
                :to="route.path"
                :class="classes"
                class="hover:bg-zinc-900 text-zinc-300"
            >
                <Icon>{{ route.meta['iconOverride'] || route.name }}</Icon>
                <span>{{ capitalize(route.name as string) }}</span>
            </RouterLink>
            <span 
                @click="logout"
                v-if="userStore.loggedIn()"
                :class="classes"
                class="-text-zinc-300 text-red-400 hover:bg-red-400/10 cursor-pointer justify-self-end mt-auto"
            >
                <Icon>logout</Icon>
                <span>Log out</span>
            </span>
        </div>
    </nav>
</template>

<style lang="scss" scope>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600&display=swap');

.title {
    font-family: 'Comfortaa', sans-serif;
}
</style>