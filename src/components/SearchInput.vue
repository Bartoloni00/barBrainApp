<script setup>
import LensIcon from '../assets/LensIcon.vue';
import MicrophoneIcon from '../assets/MicrophoneIcon.vue';

defineProps({
  searchWord:{
    type:String
  }
})

defineEmits(['update:searchWord'])
</script>
<template>
<label class="text-lg text-text-100 w-full max-w-[550px] border-2 border-primary-200 rounded flex items-center  bg-bg-100">
  <input 
  class="w-full h-full bg-bg-100 p-2 px-3 focus:bg-bg-200 focus:border-primary-200 focus:outline-transparent "
  :value="searchWord"
  @input="$event => $emit('update:searchWord', $event.target.value)"
  placeholder="Buscar..."
  />
  <MicrophoneIcon color="yellow"/>
  <LensIcon color="yellow"/>
</label>
</template>