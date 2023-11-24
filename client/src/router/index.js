import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../components/Features/user/store/authStore';
import Home from '../components/Home.vue';
import Login from '../components/Features/user/view/Login.vue';
import Register from '../components/Features/user/view/Register.vue';
import Dashboard from "@/components/Features/user/view/Dashboard.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard},
  ],
})

// router.beforeEach(async (to, from, next) => {
//   // Appel de la fonction fetchCurrentUserBeforeEnter pour obtenir les données utilisateur
//   await fetchCurrentUserBeforeEnter();

//   // Continuez la navigation
//   next();
// });
router.beforeEach(async () => {
  const authStore = useAuthStore()
  if(!authStore.loaded){
    await authStore.fetchCurrentUser();
  }
});

export default router
