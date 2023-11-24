<script setup>
import { useAuthStore} from "@/components/Features/user/store/authStore";
import { onMounted } from 'vue';
import router from "@/router";
const authStore = useAuthStore()
const isAuthenticated = authStore.isAuthenticated

onMounted(() => {
  if (!isAuthenticated) {
    router.push('/login')
  }
})

</script>

<template>
<h1>Bienvenue sur le Dashboard ! </h1>
</template>

<style scoped>

</style>