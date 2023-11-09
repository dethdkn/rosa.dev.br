<script setup lang="ts">
const { x, y } = useMouse()
const hidden = ref(true)
function nope() {
	hidden.value = false
	setTimeout(() => hidden.value = true, 5000)
}
if (process.client) {
	// eslint-disable-next-line no-console
	console.log(`%c  
	.88888.           dP                oo          dP     888888ba                             
d8'    88          88                            88     88     8b                            
88        .d8888b. 88d888b. 88d888b. dP .d8888b. 88    a88aaaa8P' .d8888b. .d8888b. .d8888b. 
88   YP88 88'   88 88'   88 88'   88 88 88ooood8 88     88    8b. 88'   88 Y8ooooo. 88'   88 
Y8.   .88 88.  .88 88.  .88 88       88 88.  ... 88     88     88 88.  .88       88 88.  .88 
88888'   88888P8 88Y8888' dP       dP  88888P' dP     dP     dP  88888P'  88888P'  88888P8`,	'font-family:monospace; color: #00FFFF;')

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
