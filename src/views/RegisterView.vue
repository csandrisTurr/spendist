<script setup lang="ts">
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import Input from '@/components/Input.vue';
import router from '@/router';
import { useUserStore } from '@/stores/user';
import type { Axios } from 'axios';
import { inject, ref } from 'vue';

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const userStore = useUserStore();
const axios: Axios = inject('axios')!;

const nameText = ref('');
const emailText = ref('');
const passwordText = ref('');
const passwordConfirmationText = ref('');

function validateEmptiness(): boolean {
  if (!nameText.value || !emailText.value || !passwordText.value || !passwordConfirmationText.value) {
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

function validatePassword(): boolean {
  if (passwordText.value != passwordConfirmationText.value) {
    alert('The passwords are not the same.');
    return false;
  }

  return true;
}

async function register() {
  if (!validateEmptiness()) return;
  if (!validateEmail()) return;
  if (!validatePassword()) return;

  await axios.post('users', {
    name: nameText.value,
    email: emailText.value,
    passwd: passwordText.value,
  });

  const { ID, name, email, passwd } = (await axios.get(`users/email/eq/${emailText.value}`)).data[0];

  userStore.setUser({
    id: ID, name: name, email: email, password: passwd
  });

  router.push('/analytics');
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
        <Input @pressed-enter="register" v-model="nameText" type="text" name="name" id="name" placeholder="Name" />
        <Input @pressed-enter="register" v-model="emailText" type="email" name="email" id="email" placeholder="E-mail" />
        <Input @pressed-enter="register" v-model="passwordText" type="password" name="password" id="password" placeholder="Password" />
        <Input @pressed-enter="register" v-model="passwordConfirmationText" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" />
        <div class="flex flex-col gap-2">
          <Button @click="register">Register</Button>
          <span class="text-sm">Already have an account? <RouterLink to="login" class="text-emerald-500">Log in!</RouterLink></span>
        </div>
      </div>
    </div>
  </main>
</template>
