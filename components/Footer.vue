<script setup lang='ts'>
const socials = ref([
	{ url: 'mailto:gabriel@rosa.dev.br', icon: 'iconoir:mail-open', name: 'Email' },
	{ url: 'https://github.com/dethdkn', icon: 'iconoir:github', name: 'Github' },
	{ url: 'https://www.linkedin.com/in/gabrielsdrosa', icon: 'iconoir:linkedin', name: 'Linkedin' },
	{ url: 'https://www.youtube.com/@gabrielsdrosa', icon: 'iconoir:youtube', name: 'Youtube' },
	{ url: 'https://www.behance.net/dethdkn', icon: 'iconoir:behance', name: 'Behance' },
	{ url: 'https://www.instagram.com/gabriel.sdrosa', icon: 'iconoir:instagram', name: 'Instagram' },
])
</script>

<template>
	<footer class="bg-[#EFF1F5] dark:bg-[#1E1E2E] space-y-4 pt-20 pb-10">
		<div class="grid grid-cols-3 sm:grid-cols-6 gap-4 place-items-center lg:flex lg:justify-center lg:items-center lg:space-x-8">
			<NuxtLink v-for="social in socials" :key="social.url" :to="social.url" target="_blank" :aria-label="social.name">
				<Icon :name="social.icon" size="3rem" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9]" />
			</NuxtLink>
		</div>
		<div class="flex justify-center items-center text-[#4C4F69] dark:text-[#CDD5F4]">
			<p>© {{ new Date().getFullYear() }} — Gabriel 'DethDKN' Rosa</p>
		</div>
	</footer>
</template>
