<script setup lang="ts">
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const emailText = ref('');
const passwordText = ref('');

function validateEmail() {

}

function validatePassword() {

}

function login() {
  validateEmail();
  validatePassword();

  userStore.setUser({
    email: emailText,
    password: passwordText,
  });

  router.push('/');
}
</script>

<template>
  <main class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col w-[300px] gap-6">
      <span class="flex items-center gap-2">
        <Icon class="text-3xl">login</Icon>
        <span class="text-3xl text-zinc-300 font-bold">Log in</span>
      </span>
      <hr class="border-zinc-700">
      <div class="flex flex-col gap-4">
        <Input v-model="emailText" type="text" name="email" id="email" placeholder="E-mail" />
        <Input v-model="passwordText" type="password" name="password" id="password" placeholder="Password" />
        <div class="flex flex-col gap-2">
          <Button @click="login">Login</Button>
          <span class="text-sm">No account? <RouterLink to="register" class="text-emerald-500">Register one!</RouterLink></span>
        </div>
      </div>
    </div>
  </main>
</template>
