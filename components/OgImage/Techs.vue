<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
})

const { title, description } = defineProps({
	title: String,
	description: String,
})
</script>

<template>
	<div class="w-full h-full bg-[#1E1E2E]">
		<h1 style="border-bottom: 2px solid #F28AA9; font-size: 60px; color: #CDD5F4; position: absolute; left: 50%; top: 10%; transform: translate(-50%, -50%);">
			{{ title }}
		</h1>
		<img src="/stack/vue.png" alt="VueJS" style="position: absolute; left: 2%; top: 10%; transform: translate(-50%, -50%); transform: rotate(30deg); width: 100px;">
		<img src="/stack/nuxt.png" alt="NuxtJS" style="position: absolute; right: 4%; top: 10%; transform: translate(-50%, -50%); transform: rotate(-30deg); width: 100px;">
		<img src="/stack/tailwind.png" alt="TailwindCSS" style="position: absolute; right: 20%; top: 65%; transform: translate(-50%, -50%); width: 100px;">
		<img src="/stack/typescript.webp" alt="Typescript" style="position: absolute; left: 6%; top: 85%; transform: translate(-50%, -50%); transform: rotate(10deg); width: 100px;">
		<img src="/stack/mongo.png" alt="MongoDB" style="position: absolute; right: 6%; top: 75%; transform: translate(-50%, -50%); transform: rotate(-10deg); width: 100px;">
		<img src="/stack/nginx.png" alt="Nginx" style=" position: absolute; right: 50%; top: 75%; transform: translate(-50%, -50%); transform: rotate(-5deg); width: 100px;">
		<div class="w-full h-full flex items-center justify-center">
			<div class="ms-6">
				<h2 style="font-size: 40px; color: #CDD5F4; padding: 60px;">
					{{ description }}
				</h2>
			</div>
		</div>
	</div>
</template>
