<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from './Features/user/store/authStore';
import { onMounted } from 'vue';
import Dashboard from "@/components/Features/user/view/Dashboard.vue";
const router = useRouter();
const authStore = useAuthStore()
const isAuthenticated = authStore.isAuthenticated


// lucarnoposey@gmail.com
</script>

<template>
   <div v-if="!authStore.isAuthenticated" class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Bienvenue</h1>
          <div class="flex gap-5">
            <router-link to="/register" class="btn btn-primary text-2xl mt-4">
              <button >Inscris-toi !</button>
            </router-link>
            <router-link to="/login" class="btn btn-primary text-2xl mt-4">
              <button >Connecte toi !</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>

</style>