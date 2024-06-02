<script setup>
import { computed } from 'vue';

const props = defineProps({
  color:{
    type: String,
    default: 'white'
  },
  isNotButton: {
    type:Boolean,
    default:false
  },
  route:{
    type: String,
    default: "/random"
  }
})
const bgColors = computed(()=>{
  switch (props.color) {
    case 'gray':
      return {border:"border-bg-200",bg:"bg-bg-200"}
      break;
    case "accent":
      return {border:"border-accent-200",bg:"bg-accent-200"}
      break
    case "primary":
      return {border:"border-primary-200",bg:"bg-primary-200"}
      break
    case "success":
      return {border:"border-green-700",bg:"bg-green-700"}
      break
    default:
      return {border:"border-bg-200",bg:"bg-bg-200"}
      break;
  }
})
</script>
<template>
  <template v-if="!isNotButton">
    <button
    type="submit" 
    :class="`cursor-pointer font-semibold overflow-hidden relative z-100 border ${bgColors.border} group px-8 py-2`">
      <span class="relative z-10 text-text-100 group-hover:text-text-100 duration-100">
        <slot>Button</slot>
      </span>
      <span :class="`absolute w-full h-full ${bgColors.bg} -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`"></span>
      <span :class="`absolute w-full h-full ${bgColors.bg} -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`"></span>
    </button>
  </template>
  <template v-else>
    <router-link 
    :to="route"
    :class="`cursor-pointer font-semibold overflow-hidden relative z-100 border ${bgColors.border} group px-8 py-2`">
      <span class="relative z-10 text-text-100 group-hover:text-text-100 duration-100">
        <slot>Anchor</slot>
      </span>
      <span :class="`absolute w-full h-full ${bgColors.bg} -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`"></span>
      <span :class="`absolute w-full h-full ${bgColors.bg} -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`"></span>
    </router-link>
  </template>
</template>