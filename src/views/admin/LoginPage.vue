<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
import BaseTitle from '@/components/BaseTitle.vue'

import useAuth from '@/composition/useAuth.js'

const {handleLogin} = useAuth()

const form = defineModel({
  default: {
    email: '',
    password:''
  }
})
</script>
<template>
  <section class="max-w-[800px] h-screen flex items-center justify-center m-auto">
    <form
    class="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-primary-100 dark:border-primary-300"
    @submit.prevent="handleLogin(form)"
    action="#"
    >
      <div class="px-8 py-10 md:px-10">
        <BaseTitle
          class="text-4xl"
        >
          ¡Bienvenido nuevamente señor admin!
        </BaseTitle>
        <p class="text-center text-text-300 dark:text-text-300 mt-3">
          Te extrañamos, inicia sesion para ingresar al panel
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
              class="block w-full px-4 py-3 mt-2 text-bg-100 bg-white border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-primary-200 dark:focus:border-primary-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-primary-100"
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
            <input
              placeholder="••••••••"
              class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-primary-200 dark:focus:border-primary-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-primary-100"
              name="password"
              id="password"
              type="password"
              v-model="form.password"
            />
          </div>
          <div class="mt-10 flex items-center justify-center">
            <BaseButton color="primary">Iniciar sesion</BaseButton>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>