<script setup>
import { useAuthStore } from './components/Features/user/store/authStore'
import "./assets/base.css"
const authStore = useAuthStore()

console.log('aaaaaaaaaaaaa',authStore.isAuthenticated);
</script>

<template>
  <div>yo</div>
</template>

<style scoped>
</style>