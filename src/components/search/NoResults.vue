<script setup>
const props = defineProps({
    wordSeacher: {
        type: String,
        required: true
    }
})
</script>
<template>
    <section class="flex flex-col gap-y-2 max-w-3xl ml-52 text-text-100">
        <p class="text-lg">No se han encontrado resultados para tu búsqueda ({{ wordSeacher }}).</p>
        <span class="text-text-300">Sugerencias:</span>
        <ul class="text-text-300">
            <li class="list-disc">Asegúrate de que todas las palabras estén escritas correctamente.</li>
            <li class="list-disc">Prueba palabras clave más generales.</li>
            <li class="list-disc">Prueba diferentes palabras clave.</li>
            <li class="list-disc">Prueba menos palabras clave.</li>
        </ul>
        <img src="../../assets/noresults.svg" alt="no results image">
    </section>
</template>