<script setup lang="ts">
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import Input from '@/components/Input.vue';
import router from '@/router';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const userStore = useUserStore();

const emailText = ref('');
const passwordText = ref('');

function validateEmail() {

}

function validatePassword() {

}

function register() {
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
        <Icon class="text-3xl">how_to_reg</Icon>
        <span class="text-3xl text-zinc-300 font-bold">Register</span>
      </span>
      <hr class="border-zinc-700">
      <div class="flex flex-col gap-4">
        <Input v-model="emailText" type="text" name="email" id="email" placeholder="E-mail" />
        <Input v-model="passwordText" type="password" name="password" id="password" placeholder="Password" />
        <Input v-model="passwordText" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" />
        <div class="flex flex-col gap-2">
          <Button @click="register">Register</Button>
          <span class="text-sm">Yes account? <RouterLink to="login" class="text-emerald-500">Log in!</RouterLink></span>
        </div>
      </div>
    </div>
  </main>
</template>
