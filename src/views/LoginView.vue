<script setup lang="ts">
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { inject, ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/stores/user';
import VueAxios from 'vue-axios';
import { Axios } from 'axios';

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const userStore = useUserStore();
const axios: Axios = inject('axios')!;

const emailText = ref('');
const passwordText = ref('');

function validateEmptiness(): boolean {
  if (!emailText.value || !passwordText.value) {
    alert('Every field must contain a value.');
    return false;
  }

  return true;
}

function validateEmail(): boolean {
  if (!emailRegex.test(emailText.value)) {
    alert('Invalid e-mail address.');
    return false;
  }

  return true;
}

async function login() {
  if (!validateEmptiness()) return;
  if (!validateEmail()) return;
  
  const { ID, name, email, passwd } = (await axios.get(`users/email/eq/${emailText.value}`)).data[0];

  if (passwd != passwordText.value) {
    alert('Bad email or password');
    return;
  }

  userStore.setUser({
    id: ID, name: name, email: email, password: passwd
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
        <Input v-model="emailText" type="email" name="email" id="email" placeholder="E-mail" />
        <Input v-model="passwordText" type="password" name="password" id="password" placeholder="Password" />
        <div class="flex flex-col gap-2">
          <Button @click="login">Login</Button>
          <span class="text-sm">No account? <RouterLink to="register" class="text-emerald-500">Register one!</RouterLink></span>
        </div>
      </div>
    </div>
  </main>
</template>
