<script setup>
import {onMounted, ref} from 'vue';
import {useRouter} from "vue-router";
import { useAuthStore } from '../store/authStore';
const router = useRouter()
const authStore = useAuthStore()
const error = ref("")

const email = ref("")

const password = ref("")

const formValid = ref(false)

const emailValid = ref(false)
const passwordValid = ref(false)

const isFormValid = () => {
  const EmailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])(?=.{8,})/;
  if(EmailRegEx.test(email.value) && PasswordRegEx.test(password.value)) {
    formValid.value = true
    error.value = ""
    emailValid.value = true
    passwordValid.value = true
  } else if(!EmailRegEx.test(email.value)){
    formValid.value = false
    emailValid.value = false
  } else if(!PasswordRegEx.test(password.value)){
    formValid.value = false
    emailValid.value = true
    passwordValid.value = false
  }
}
const login = async () => {
  const user = {
    email: email.value,
    password: password.value
  }
 await authStore.login(user)
 router.push('/dashboard')
    .catch((err) => {
      error.value = err.response?.data.message
    })

}


</script>

<template>

  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col w-screen">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Connecte Toi !</h1>
      </div>
      <form @submit.prevent="login()" class="w-full flex justify-center">
        <div class="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
          <div class="card-body w-full">
            <div class="form-control">
              <div v-if="error !== ''" class="text-accent w-full text-center text-lg font-bold">{{error}}</div>
              <label class="label">
                <span class="label-text text-xl" >Email</span>
              </label>
              <input type="text" v-model="email" ref="emailInput" @input="isFormValid" placeholder="Email" :class="{'border-primary':emailValid}" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl">Mot de passe</span>
              </label>
              <input type="password" v-model="password" @input="isFormValid" placeholder="Mot de passe" class="input input-bordered" :class="{'border-primary':passwordValid}"  />
              <label class="label">
                <router-link to="/" class="label-text-alt link link-hover text-md">Mot de passe oublié?</router-link>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" :disabled="!formValid">Se connecter</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>

.input{
  border: 1px solid black;
}
.border-primary{
  border: 1px solid #059669;
  outline: 0;
}
</style>