import { useAuthStore } from "../../components/Features/user/store/authStore";



export const AuthGuardService = (to, from, next) => {
  const authStore = useAuthStore();
  console.log('HOTT',authStore.isAuthenticated);
  if (authStore.isAuthenticated) {
    next();
  } else {
    next('/login');
  }
};