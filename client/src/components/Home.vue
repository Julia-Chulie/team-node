<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from './Features/user/store/authStore';
import { onMounted } from 'vue';
const router = useRouter();
const authStore = useAuthStore()
const isAuthenticated = authStore.isAuthenticated


// lucarnoposey@gmail.com
</script>

<template>
   <div v-if="!authStaure.isAuthenticated" class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Bienvenue</h1>
          <router-link to="/register" class="btn btn-primary text-2xl">
            <button >Inscris-toi !</button>
         </router-link>
        </div>
      </div>
    </div>
    <div v-if="authStaure.isAuthenticated" class="min-h-screen bg-base-200">
      <div class="text-center flex justify-center mb-10">
        <div>
          <h1 class="text-3xl font-bold pt-10">Venez perfectionné ou partagé votre savoir dans MyLesson</h1>
          <p class="py-6">La plate-forme qui te permet de partager ton expérience et d'apprendre autour de sujets qui te passionnent !</p>
          <router-link to="/lessons" class="btn btn-primary text-2xl">
            <button >Voir les cours</button>
         </router-link>
        </div>
      </div>
    </div>
</template>
<style scoped>

</style>