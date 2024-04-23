<script setup></script>
<template>
    <button class="cursor-pointer font-semibold overflow-hidden relative z-100 border border-bg-200 group px-8 py-2">
  <span class="relative z-10 text-text-100 group-hover:text-text-100 duration-100"><slot>Magic !</slot></span>
  <span class="absolute w-full h-full bg-bg-200 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span class="absolute w-full h-full bg-bg-200 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
</template>
<style scoped>

</style>