<script setup>
const props = defineProps({
    preview: {
        type: String,
        required:true
    }
})
</script>
<template>
    <div>
        <p class="text-center">Previsualizacion de la imagen seleccionada: </p>
        <img 
        :src="preview" 
        alt="Previsualizacion de la imagen seleccionada" 
        class="my-2 mx-auto"
        />
    </div>
</template>