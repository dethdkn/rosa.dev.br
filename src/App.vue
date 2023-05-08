<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
const route = useRoute()
</script>
<template>
  <NavBar :myCurrentRoute="route.path"/>
  <main class="min-h-[calc(100vh-1.97rem)] ml-[3.35rem] bg-gray-100 dark:bg-gray-900 transition-500">
    <RouterView/>
  </main>
  <Footer/>
</template>