<script setup lang='ts'>

</script>

<template>
	<div class="px-20 py-5">
		<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
			Tech Stack
		</p>
		<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 place-items-center pt-8">
			<NuxtLink to="https://vuejs.org" external target="_blank">
				<img src="/stack/vue.png" alt="Vue.JS Logo" class="w-24 hover:cursor-pointer" title="Vue.JS">
			</NuxtLink>
			<NuxtLink to="https://nuxt.com" external target="_blank">
				<img src="/stack/nuxt.png" alt="Nuxt.JS Logo" class="w-24 hover:cursor-pointer" title="Nuxt.JS">
			</NuxtLink>
			<NuxtLink to="https://www.typescriptlang.org" external target="_blank">
				<img src="/stack/typescript.webp" alt="Typescript Logo" class="w-24 hover:cursor-pointer" title="Typescript">
			</NuxtLink>
			<NuxtLink to="https://tailwindcss.com" external target="_blank">
				<img src="/stack/tailwind.png" alt="TailwindCSS Logo" class="w-24 hover:cursor-pointer" title="TailwindCSS">
			</NuxtLink>
			<NuxtLink to="https://www.mongodb.com" external target="_blank">
				<img src="/stack/mongo.png" alt="MongoDB Logo" class="w-24 hover:cursor-pointer" title="MongoDB">
			</NuxtLink>
			<NuxtLink to="https://www.nginx.com" external target="_blank">
				<img src="/stack/nginx.png" alt="Nginx Logo" class="w-24 hover:cursor-pointer" title="Nginx">
			</NuxtLink>
		</div>
	</div>
</template>
