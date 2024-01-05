<template>
	<footer class="bg-[#EFF1F5] dark:bg-[#1E1E2E] space-y-4 pt-20 pb-10">
		<div class="grid grid-cols-3 sm:grid-cols-6 gap-4 place-items-center lg:flex lg:justify-center lg:items-center lg:space-x-8">
			<NuxtLink v-for="social in socials" :key="social.url" :to="social.url" target="_blank" :aria-label="social.name">
				<Icon :name="social.icon" size="3rem" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9]" />
			</NuxtLink>
		</div>
		<div class="flex flex-col justify-center items-center text-[#4C4F69] dark:text-[#CDD5F4] space-y-2">
			<p><Icon name="iconoir:copyright" class="mb-1" size="18" /> {{ new Date().getFullYear() }} <span class="mx-2">—</span> Gabriel 'DethDKN' Rosa</p>
			<p>
				Powered by&nbsp;
				<NuxtLink to="https://nuxt.com" external target="_blank" class="text-[#43DD7D] transition-all duration-300 nuxt">
					<Icon name="logos:nuxt-icon" class="mb-1" /> Nuxt
				</NuxtLink>
				<span class="mx-2">—</span>
				Hosted on&nbsp;
				<NuxtLink to="https://vercel.com/home" external target="_blank" class="text-[#000000] transition-all duration-300 vercel">
					<Icon name="logos:vercel-icon" class="mb-1" /> Vercel
				</NuxtLink>
			</p>
		</div>
	</footer>
</template>

<style scoped lang="sass">
.nuxt:hover
	filter: drop-shadow(0 0 5px #43DD7Daa)
.vercel:hover
	filter: drop-shadow(0 0 5px #000000aa)
</style>
