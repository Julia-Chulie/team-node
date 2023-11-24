<script setup>
import { useAuthStore } from './components/Features/user/store/authStore'
import "./assets/base.css"
import Header from "@/components/Header.vue";
const authStore = useAuthStore()

console.log('aaaaaaaaaaaaa',authStore.isAuthenticated);
</script>

<template>
  <Header :isAuthenticated="authStore.isAuthenticated" />
  <router-view/>
</template>

<style scoped>
</style>