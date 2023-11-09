<script setup lang="ts">

</script>

<template>
	<NuxtLoadingIndicator color="#0284c7" :height="4" />
	<Navbar />
	<main class="min-h-screen ml-[3.35rem] bg-gray-100 dark:bg-gray-900 transition-500">
		<slot />
	</main>
</template>
