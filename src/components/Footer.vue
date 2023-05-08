<script setup lang="ts">
import { ref } from 'vue'
const ano = ref(new Date().getFullYear())
</script>

<template>
    <footer class="bg-cyan-500 m-auto text-center text-gray-100 dark:text-gray-800 ml-[3.35rem] p-1 transition-500">
        <FaIcon icon="copyright"/>
        <p class="font-bold inline-block ml-2">{{ ano }}</p>
    </footer>
</template>

<style scoped lang="sass">

</style>