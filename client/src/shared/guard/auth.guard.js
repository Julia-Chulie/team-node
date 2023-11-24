import { useAuthStore } from "../../components/Features/user/store/authStore";



export const AuthGuardService = (to, from, next) => {
  const authStore = useAuthStore();
  console.log('HOTT',authStore.isAuthenticated);
  if (authStore.isAuthenticated) {
    // Utilisateur authentifié, laissez-le accéder à la route actuelle
    next();
  } else {
    // Utilisateur non authentifié, redirigez-le vers la page de connexion
    next('/login');
  }
};