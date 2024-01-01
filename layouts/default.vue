<script setup lang='ts'>

</script>

<template>
	<VercelSpeedInsights />
	<NuxtLoadingIndicator color="#F28AA9" />
	<Nav @contextmenu.prevent />
	<main class="min-h-[calc(100vh-273px)] bg-[#EFF1F5] dark:bg-[#1E1E2E]" @contextmenu.prevent>
		<slot />
	</main>
	<Footer @contextmenu.prevent />
</template>
