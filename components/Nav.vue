<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

function changeLanguage() {
	locale.value === 'en' ? setLocale('pt') : setLocale('en')
}

const isDark = computed({
	get() { return useColorMode().value === 'dark' },
	set() { useColorMode().preference = useColorMode().value === 'dark' ? 'light' : 'dark' },
})

const menuClosed = ref(true)
</script>

<template>
	<nav class="bg-[#EFF1F5] dark:bg-[#1E1E2E] border-b border-gray-200 dark:border-gray-800">
		<div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
			<NuxtLink to="/" class="flex items-center group">
				<NuxtImg src="/logo.webp" :alt="t('nav.logo')" class="w-8 h-8 mr-3 group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[2000ms] group-hover:animate-delay-500" preload />
				<span class="self-center text-2xl font-semibold whitespace-nowrap text-[#4C4F69] dark:text-[#CDD5F4] group-hover:text-[#F28AA9] dark:group-hover:text-[#F28AA9] font-['Delius_Unicase']">Gabriel Rosa</span>
			</NuxtLink>
			<div class="flex items-center space-x-4 lg:order-2 sm:mt-0">
				<button :aria-label="t('nav.language')" @click="changeLanguage">
					<Icon name="iconoir:chat-bubble-translate" size="1.5rem" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9]" />
				</button>
				<ClientOnly>
					<button :aria-label="t('nav.theme')" @click="isDark = !isDark">
						<Icon :name="isDark ? 'iconoir:moon-sat' : 'iconoir:sun-light'" size="1.5rem" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9]" />
					</button>
					<template #fallback>
						<div class="animate-pulse rounded-full h-6 w-6 bg-gray-200 dark:bg-gray-700" />
					</template>
				</ClientOnly>
				<button :aria-label="t('nav.menu')" class="lg:hidden" @click="menuClosed = !menuClosed">
					<Icon name="iconoir:menu" size="1.5rem" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9]" />
				</button>
			</div>
			<div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" :class="{ hidden: menuClosed }">
				<ul class="flex flex-col p-4 mt-4 font-medium border border-stone-300 rounded-lg lg:p-0 bg-[#EFF1F5] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 dark:bg-[#1E1E2E] dark:border-gray-700">
					<li v-for="route in routes" :key="route.path">
						<NuxtLinkLocale :to="route.path" class="block py-2 pl-3 pr-4 rounded lg:rounded-none lg:p-0 text-[#4C4F69] hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#F28AA9] dark:text-[#CDD5F4] lg:dark:hover:text-[#F28AA9] dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent border-transparent hover:lg:border-[#F28AA9] hover:lg:dark:border-[#F28AA9] lg:border-b-2 lg:border-opacity-0 hover:lg:border-opacity-100" active-class="!text-white bg-[#F28AA9] hover:!bg-[#F28AA9] lg:bg-transparent hover:lg:!bg-transparent lg:!text-[#4C4F69] lg:dark:!text-[#CDD5F4] lg:border-[#4C4F69] lg:dark:border-[#4C4F69] lg:border-opacity-100 lg:hover:!text-[#F28AA9] lg:dark:hover:!text-[#F28AA9] hover:lg:border-[#F28AA9] hover:lg:dark:border-[#F28AA9]" @click="menuClosed = true">
							{{ t(route.text) }}
						</NuxtLinkLocale>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
