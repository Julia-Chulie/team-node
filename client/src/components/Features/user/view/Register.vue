<script setup>
import {onMounted, ref} from 'vue';
import {useRouter} from "vue-router";
import register from "../../../../shared/api/register.api"
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ /* options */ });

const router = useRouter()
const message = ref("")

const lastname = ref("")
const firstname = ref("")
const email = ref("")
const password = ref("")

const formValid = ref(false)

const lastnameValid = ref(false)
const firstnameValid = ref(false)
const emailValid = ref(false)
const passwordValid = ref(false)
const formProgress = ref(0)
const EmailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])(?=.{8,})/;
const NomfirstnameRegEx = /^[a-zA-Z]{3,}$/;
const hasFormBeenValidated = ref(false)

const formProgressText = ref("")
const isFormValid = () => {
  if(EmailRegEx.test(email.value) && PasswordRegEx.test(password.value) && NomfirstnameRegEx.test(lastname.value) && NomfirstnameRegEx.test(firstname.value)) {
    formValid.value = true
    formProgress.value = 100
    formProgressText.value = "--value:" + formProgress.value
    emailValid.value = true
    passwordValid.value = true
    firstnameValid.value = true
    lastnameValid.value = true
  } else {
    formValid.value = false
    emailValid.value = EmailRegEx.test(email.value);
    passwordValid.value = PasswordRegEx.test(password.value);
    firstnameValid.value = NomfirstnameRegEx.test(firstname.value);
    lastnameValid.value = NomfirstnameRegEx.test(lastname.value);
    checkProgress(emailValid.value, passwordValid.value, firstnameValid.value, lastnameValid.value);
  }
}
const checkProgress = (emailValid, passwordValid, firstnameValid, lastnameValid) =>{
  formProgress.value = 0;
  emailValid?formProgress.value += 25 : formProgress.value;
  passwordValid? formProgress.value += 25 : formProgress.value;
  firstnameValid? formProgress.value += 25 : formProgress.value;
  lastnameValid? formProgress.value += 25 : formProgress.value;
  formProgressText.value = "--value:" + formProgress.value;

}
const registerUser = () => {
  const user = {
    email: email.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value
  }
  register(user)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        hasFormBeenValidated.value = true;
        const toasterOptions =  {
          position: "top-right",
          duration: 5000,
          singleton: true,
          showCloseButtonOnHover: false,
          iconPack: "fontawesome",
          icon: "fa-check",
          theme: "bubble",
          type: "success",
          transitionType: "slide",
          closeOnClick: true,
          pauseOnHover: true,
          limit: 1,
        }
        if(data.error){
          toaster.error(data.message, toasterOptions)
        }else {
          toaster.success(data.message, toasterOptions)
          setTimeout(() => {
            router.push("/login")
          }, 2000)
        }
      })
      .catch(err => console.log(err))
}

onMounted(() => {
})

</script>

<template>

  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col w-screen">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Créer un compte</h1>
      </div>
      <form @submit.prevent="registerUser()" class="w-full flex justify-center">
        <div class="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
          <div v-if="!hasFormBeenValidated" class="flex justify-center pt-6">
            <div class="radial-progress progress-color" :style="formProgressText">{{ formProgress }}%</div>
          </div>
          <div class="card-body w-full pt-4">
            <div v-if="message !== ''" class="text-info w-full text-center text-lg font-bold">{{message}}</div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl">Nom</span>
              </label>
              <div v-if="!lastnameValid && lastname !== ''" class="tooltip tooltip-open tooltip-top" data-tip="3 caractères minimum">
              </div>
              <input type="text" v-model="lastname" @input="isFormValid" placeholder="Nom" :class="{'border-primary':lastnameValid}" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl">Prénom</span>
              </label>
              <div v-if="!firstnameValid && firstname !== ''" class="tooltip tooltip-open tooltip-top" data-tip="3 caractères minimum">
              </div>
              <input type="text" v-model="firstname" @input="isFormValid" placeholder="Prénom" :class="{'border-primary':firstnameValid}" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl" >Email</span>
              </label>
              <div v-if="!emailValid && email !== ''" class="tooltip tooltip-open tooltip-top" data-tip="Email invalide">
              </div>
              <input type="text" v-model="email" @input="isFormValid" placeholder="Email" :class="{'border-primary':emailValid}" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl">Mot de passe</span>
              </label>
              <div v-if="!passwordValid && password !== ''" class="tooltip tooltip-open tooltip-top" data-tip="8 caractères minimum : au moins
              1 majuscule, 1 minuscule,
              1 chiffres et 1 caractère spécial">
              </div>
              <input type="password" v-model="password" @input="isFormValid" placeholder="Mot de passe" class="input input-bordered" :class="{'border-primary':passwordValid}"  />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" :disabled="!formValid">S'inscrire</button>
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
.progress-color{
  color: #059669;
}
</style>