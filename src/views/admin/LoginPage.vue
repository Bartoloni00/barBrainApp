<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
import BaseTitle from '@/components/common/BaseTitle.vue'
import EyeButton from '@/components/common/EyeButton.vue'

import useAuth from '@/composition/useAuth.js'
import useEye from '@/composition/useEye.js'

const { handleLogin } = useAuth()
const { passwordInputType, handleEye, iconEye } = useEye()

const form = defineModel({
  default: {
    email: '',
    password:''
  }
})
</script>
<template>
  <section class="max-w-[800px] min-h-[92vh] flex items-center justify-center m-auto">
    <form
    class="bg-text-100 dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-accent-100 dark:border-accent-200"
    @submit.prevent="handleLogin(form)"
    action="#"
    >
      <div class="px-8 py-10 md:px-10">
        <BaseTitle class="text-3xl text-accent-100">¡Bienvenido al Panel de administrador!</BaseTitle>
        <p class="text-center text-text-300 dark:text-text-300 mt-3">
          ¡¡¡Inicia sesion para ingresar al panel!!!
        </p>
        <div class="mt-10">
          <div class="relative">
            <label
              class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100"
              for="email"
              >Email</label
            >
            <input
              placeholder="you@example.com"
              class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
              name="email"
              id="email"
              type="email"
              v-model="form.email"
            />
          </div>
          <div class="mt-6">
            <label
              class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100"
              for="password"
              >Contraseña</label
            >
            <div
            class="flex justify-center items-center w-full bg-text-100 border-2 rounded-lg mt-2"
            >
              <input
              class="block w-full px-4 py-3 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
              placeholder="••••••••"
              name="password"
              id="password"
              :type="passwordInputType"
              v-model="form.password"
            />
            <EyeButton :visibility="iconEye" @click="handleEye"/>
            </div>
          </div>
          <div class="mt-10 flex items-center justify-center">
            <BaseButton color="accent" class="text-xl">Iniciar sesion</BaseButton>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>