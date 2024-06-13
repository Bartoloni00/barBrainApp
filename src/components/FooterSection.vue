<script setup>
</script>

<template>
  <footer class="text-lg w-full border-t-2 border-primary-100 min-h-[8vh] bg-bg-100 text-text-100">
    <nav class="max-w-screen-2xl m-auto flex items-center px-5 sm:justify-between justify-center pt-2">
        <ul class="flex items-center gap-3">
        <li>
            <a 
            href="https://github.com/Bartoloni00" 
            target="_blank" 
            class="hover:underline"
            title="Github de Bartoloni Abraham"
            >&copy; <span>Bartoloni Abraham 2024</span></a>
        </li>
        <li class="hidden sm:block">
            <a 
            href="/documentation" 
            class="hover:underline"
            title="documentacion"
            >Como funciona la busqueda</a>
        </li>
        </ul>
        <ul class="hidden sm:flex items-center gap-3">
        <li>
            <a 
            href="/privacidad" 
            class="hover:underline"
            title="terminos de privacidad"
            >Privacidad</a>
        </li>
        <li>
            <a 
            href="/condiciones" 
            class="hover:underline"
            title="condiciones de uso del navegador"
            >Condiciones</a>
        </li>
        </ul>
    </nav>
  </footer>
</template>