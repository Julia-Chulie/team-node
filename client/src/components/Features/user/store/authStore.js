import {defineStore} from "pinia";
import authStorageService from "./authStorage";
import login from '../../../../shared/api/auth.api'
import {jwtDecode} from "jwt-decode";
import {fetchCurrentUser, fetchUserById} from "@/shared/api/user.api";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        currentUser: null,
        userById: null,
        loaded: false,
        loadedUserById: false,
        loading: false,
        followedLesson : 0
    }),

    getters: {
        isAuthenticated(state) {
            if (state.currentUser) {
                return true;
            } else if (!state.currentUser && state.loaded) {
                return false;
            } else {
                return null;
            }
        },
    },


//    karim.benzema@gmail.com
    actions: {
        async login(user) {
            try {
                this.loading = true;
                const response = await login(user)
                const token = response.data.token;
                const decodedtoken = jwtDecode(token);
                authStorageService.saveToken(token);
                this.currentUser = await fetchUserById(decodedtoken._id)

            } catch (error) {
                throw error
            }
        },
        logout() {
            authStorageService.removeToken();
            this.currentUser = null;
        },


        async fetchUserById(id) {
            this.userById = await fetchUserById(id)
            if(this.userById){
                this.loadedUserById = true;
            }else{
                this.loadedUserById = false
            }
        },

        async updateCurrentUser(user) {
            try {
                const response = await updateUser(user)
                this.fetchCurrentUser();
                return response.data;
            } catch (error) {
                throw error
            }
        },
        async fetchCurrentUser() {
            this.currentUser = await fetchCurrentUser();
            this.loaded = true;

        }


    },
})