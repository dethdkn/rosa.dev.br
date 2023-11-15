<script setup lang="ts">
const { t, locale } = useI18n()

const language = useCookie('language')
const theme = useCookie('theme')

const computedLanguage = computed({
	get() {
		return locale.value
	},
	set(val) {
		locale.value = val
		language.value = val
	},
})

if (language.value === 'pt')
	computedLanguage.value = 'pt'

const { currentRoute: route } = useRouter()

function checkRoute(current: string = '', nav: string[]) {
	return nav.includes(current) ? 'navbar-link-active' : 'bg group navbar-link'
}

function changeTheme() {
	const htmlClasses = document.getElementsByTagName('html')[0].classList
	if (htmlClasses.contains('dark')) {
		htmlClasses.remove('dark')
		theme.value = 'light'
		return
	}
	htmlClasses.add('dark')
	theme.value = 'dark'
}

function changeLanguage() {
	if (computedLanguage.value === 'en')
		return computedLanguage.value = 'pt'
	computedLanguage.value = 'en'
}

const favicon = ref(true)

if (process.client) {
	let keys: string[] = []
	const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']

	window.addEventListener('keydown', (event) => {
		keys.push(event.key)
		keys.splice(-sequence.length - 1, keys.length - sequence.length)
		if (keys.join(',') === sequence.join(',')) {
			keys = []
			favicon.value = false
			setTimeout(() => favicon.value = true, 1980)
		}
	})
}
</script>

<template>
	<NuxtLoadingIndicator color="#0284c7" :height="4" />
	<aside
		class="sidebar fixed min-h-screen w-[3.35rem] hover:w-60 z-50 overflow-hidden border-r bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow-lg transition-500 overflow-y-auto"
	>
		<div class="flex h-screen flex-col justify-between pt-2 pb-6">
			<div>
				<div class="flex items-center w-max p-2.5 cursor-cell">
					<img v-if="favicon" src="/favicon.ico" class="w-8 h-8 inline-block" :alt="t('navbar.logo-alt')">
					<img v-else src="/happy.gif" class="w-8 h-8 inline-block" alt="Happy Gif">
					<h1 class="inline-block ml-4 font-medium text-center dark:text-white transition-1000">
						<p>{{ t('navbar.title') }}</p>
						<p class="text-xs">
							{{ t('navbar.subtitle') }}
						</p>
					</h1>
				</div>
				<ul class="mt-6 space-y-2 tracking-wide">
					<li class="min-w-max">
						<NuxtLink to="/" :class="checkRoute(route.fullPath, ['/'])">
							<Icon name="line-md:home-md" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.home') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/about" :class="checkRoute(route.fullPath, ['/about'])">
							<Icon name="line-md:emoji-smile" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.about') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/experience" :class="checkRoute(route.fullPath, ['/experience'])">
							<Icon name="line-md:star-alt" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.experience') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/certificates" :class="checkRoute(route.fullPath, ['/certificates'])">
							<Icon name="line-md:check-list-3" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.certificates') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/apps-pages" :class="checkRoute(route.fullPath, ['/apps-pages'])">
							<Icon name="line-md:document-code" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.apps') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/pictures" :class="checkRoute(route.fullPath, ['/pictures'])">
							<Icon name="line-md:image" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.pictures') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/videos" :class="checkRoute(route.fullPath, ['/videos'])">
							<Icon name="line-md:youtube-filled" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.videos') }}
							</span>
						</NuxtLink>
					</li>
					<li class="min-w-max">
						<NuxtLink to="/download" :class="checkRoute(route.fullPath, ['/downloads'])">
							<Icon name="line-md:cloud-down" class="mr-2 group-hover:text-sky-600" />
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
							<Icon name="line-md:account" class="mr-2 group-hover:text-sky-600" />
							<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
								{{ t('navbar.socials') }}
							</span>
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="w-max -mb-3">
				<span class="bg group navbar-link cursor-pointer" @click="changeTheme">
					<Icon v-if="theme === 'light'" name="line-md:moon-to-sunny-outline-transition" class="mr-2 group-hover:text-sky-600" />
					<Icon v-else name="line-md:sunny-outline-to-moon-transition" class="mr-2 group-hover:text-sky-600" />
					<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
						{{ t('navbar.theme') }}
					</span>
				</span>
				<span class="bg group navbar-link cursor-pointer" @click="changeLanguage">
					<Icon name="line-md:rotate-270" class="mr-2 group-hover:text-sky-600" />
					<span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
						{{ t('navbar.language') }}
					</span>
				</span>
			</div>
		</div>
	</aside>
</template>
