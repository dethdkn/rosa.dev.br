<script setup lang='ts'>

</script>

<template>
	<VercelSpeedInsights />
	<NuxtLoadingIndicator color="#F28AA9" />
	<Nav />
	<main class="min-h-[calc(100vh-305px)] bg-[#EFF1F5] dark:bg-[#1E1E2E]">
		<slot />
	</main>
	<Footer />
</template>
