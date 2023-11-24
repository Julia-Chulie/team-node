<script setup>
import { useRouter } from 'vue-router';
import { defineProps,computed, reactive,onMounted } from 'vue';
import { useAuthStore } from './Features/user/store/authStore.js';
import authStorageService from "@/components/Features/user/store/authStorage";

const router = useRouter();

defineProps({
  isAuthenticated: {
    type: Boolean,
    default: false
  }
});

function logout() {
  authStore.logout();
  router.push('/');
}
const authStore = useAuthStore();


const currentUser = computed(() => {
  const currentUser = authStore.currentUser;
  console.log('lalalCOMPuted',currentUser);
  return currentUser;
})

const currentUserInitials = computed(() => {
  const currentUser = authStore.currentUser
  if (currentUser && currentUser.lastname && currentUser.firstname) {
    const initials = (currentUser.lastname.charAt(0) + currentUser.firstname.charAt(0)).toUpperCase();
    return initials;
  }
  return '';
});

</script>
<template>
  <nav>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <router-link to="/" class="btn btn-ghost normal-case text-xl">Team Node</router-link>
      </div>
      <div class="navbar-end " v-if="isAuthenticated">
        <ul class="menu menu-horizontal px-4">
          <a @click="logout" class="btn ">Déconnexion</a>
        </ul>
      </div>
      <div class="navbar-end hidden lg:flex" v-else>
        <ul class="menu menu-horizontal px-1 gap-5">
          <router-link to="/login" class="btn">Connexion</router-link>
          <router-link to="/register" class="btn">Inscription</router-link>
        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.stat{
  padding: 5px;
}
.stat-value{
  font-size: 1.5rem;
}
.stats{
  border-radius: 8px;
}
</style>
