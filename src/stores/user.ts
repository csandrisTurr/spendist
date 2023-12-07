import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref(null);

  function setUser(user: any) {
    currentUser.value = user;
  }

  function loggedIn(): boolean {
    return currentUser.value != null;
  }

  function getUser(): any {
    return currentUser.value;
  }

  return { setUser, loggedIn, getUser };
})
