<script setup>
import LensIcon from '@/assets/LensIcon.vue';
import MicrophoneIcon from '@/assets/MicrophoneIcon.vue';
import StopIcon from '@/assets/StopIcon.vue';

defineProps({
  searchWord:{
    type:String
  }
})

defineEmits(['update:searchWord'])


// const recognition = new webkitSpeechRecognition();

// recognition.continuous = true;
// recognition.lang = 'es-ES';
// recognition.interimResult = false;


// const iniciar = () => {recognition.start(); console.log('start');}

// const parar = () => {recognition.abort(); console.log('stop', recognition);}
// recognition.onresult = (event) => {
//     const texto = event.results[event.results.length - 1][0].transcript;
//     console.log(texto);
// }
// recognition.onresult = event => {
//   console.log('onresult', event);
//     console.log(event.results[event.results.length - 1][0].transcript);
//   };
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
  <button type="submit"><LensIcon color="yellow"/></button>
</label>
</template>