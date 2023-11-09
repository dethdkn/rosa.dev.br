<script setup lang="ts">
const { x, y } = useMouse()
const hidden = ref(true)
function nope() {
	hidden.value = false
	setTimeout(() => hidden.value = true, 5000)
}
if (process.client) {
	window.addEventListener('keydown', (event) => {
		if (event.code === 'F12') {
			event.preventDefault()
			nope()
			return false
		}
	})
}
</script>

<template>
	<NuxtLoadingIndicator color="#0284c7" :height="4" @contextmenu.prevent="nope" />
	<nav @contextmenu.prevent="nope">
		<Navbar />
	</nav>
	<main class="min-h-screen ml-[3.35rem] bg-gray-100 dark:bg-gray-900 transition-500" @contextmenu.prevent="nope">
		<slot />
	</main>
	<img src="/nope.gif" alt="nope emoji gif" class="absolute -translate-x-[75%] -translate-y-1/2 h-32 cursor-none z-50 rounded-md" :class="{ hidden }" :style="{ left: `${x}px`, top: `${y}px` }" @contextmenu.prevent>
</template>
