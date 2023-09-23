<script setup lang="ts">
const {t, locale} = useI18n()

const language = useCookie('language')
const theme = useCookie('theme')

const {currentRoute: route} = useRouter()

const checkRoute = (current: string = '', nav: string[]) => {
	return nav.includes(current) ? 'navbar-link-active' : 'bg group navbar-link'
}

const changeTheme = () => {
	const htmlClasses = document.getElementsByTagName('html')[0].classList
	if (htmlClasses.contains('dark')) {
		htmlClasses.remove('dark')
		theme.value = 'light'
		return
	}
	htmlClasses.add('dark')
	theme.value = 'dark'
}

const changeLanguage = () => {
	if (locale.value === 'en-US') {
		locale.value = 'pt-BR'
		language.value = 'pt-BR'
		return
	}
	locale.value = 'en-US'
	language.value = 'en-US'
}

const ano = ref(new Date().getFullYear())
</script>
<template>
	<aside
		class="sidebar fixed min-h-screen w-[3.35rem] hover:w-60 z-50 overflow-hidden border-r bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow-lg transition-500 overflow-y-auto"
	>
		<div class="flex h-screen flex-col justify-between pt-2 pb-6">
			<div>
				<div class="flex items-center w-max p-2.5 cursor-cell">
					<img src="/favicon.ico" class="w-8 h-8 inline-block" :alt="t('navbar.logo-alt')" />
					<h1 class="inline-block ml-4 font-medium text-center dark:text-white transition-1000">
						<p>{{ t('navbar.title') }}</p>
						<p class="text-xs">{{ t('navbar.subtitle') }}</p>
					</h1>
				</div>
				<ul class="mt-6 space-y-2 tracking-wide">
					<li class="min-w-max">
						<NuxtLink to="/" :class="checkRoute(route.fullPath, ['/'])">
							<Icon name="i-heroicons-home" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.home') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/about" :class="checkRoute(route.fullPath, ['/about'])">
							<Icon name="i-heroicons-face-smile" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.about') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/experience" :class="checkRoute(route.fullPath, ['/experience'])">
							<Icon name="i-heroicons-sparkles" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.experience') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/certificates" :class="checkRoute(route.fullPath, ['/certificates'])">
							<Icon name="i-heroicons-check-badge" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.certificates') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/apps-pages" :class="checkRoute(route.fullPath, ['/apps-pages'])">
							<Icon name="i-heroicons-code-bracket" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.apps') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/pictures" :class="checkRoute(route.fullPath, ['/pictures'])">
							<Icon name="i-heroicons-camera" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.pictures') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/videos" :class="checkRoute(route.fullPath, ['/videos'])">
							<Icon name="i-heroicons-video-camera" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.videos') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/download" :class="checkRoute(route.fullPath, ['/downloads'])">
							<Icon
								name="i-heroicons-arrow-down-on-square-stack"
								class="mr-2 group-hover:text-sky-600"
							/>
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.downloads') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink
							to="/socials-contact"
							:class="checkRoute(route.fullPath, ['/socials-contact'])"
						>
							<Icon name="i-heroicons-user-circle" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.socials') }}
							</span>
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="w-max -mb-3">
				<span class="bg group navbar-link cursor-pointer" @click="changeTheme">
					<Icon name="i-heroicons-swatch" class="mr-2 group-hover:text-sky-600" />
					<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
						{{ t('navbar.theme') }}
					</span>
				</span>
				<span class="bg group navbar-link cursor-pointer" @click="changeLanguage">
					<Icon name="i-heroicons-language" class="mr-2 group-hover:text-sky-600" />
					<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
						{{ t('navbar.language') }}
					</span>
				</span>
			</div>
		</div>
	</aside>
	<main class="min-h-screen ml-[3.35rem] bg-gray-100 dark:bg-gray-900 transition-500">
		<slot />
	</main>
</template>
