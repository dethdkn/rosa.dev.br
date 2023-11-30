<script setup lang='ts'>

</script>

<template>
	<NuxtLoadingIndicator color="#F28AA9" :height="5" />
	<Nav @contextmenu.prevent />
	<main class="min-h-[calc(100vh-272px)] bg-[#EFF1F5] dark:bg-[#1E1E2E]" @contextmenu.prevent>
		<slot />
	</main>
	<Footer @contextmenu.prevent />
</template>
