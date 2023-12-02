<script setup lang='ts'>
const { t } = useI18n()

useHead({
	title: t('posts.primevue_locale_dynamic.title'),
})

useSeoMeta({
	description: t('posts.primevue_locale_dynamic.description'),
})

defineOgImage({
	component: 'Simple',
	title: t('posts.primevue_locale_dynamic.title'),
})

const code1 = `export default defineNuxtConfig({
	i18n: {
		baseUrl: 'https://example.com/',
		defaultLocale: 'en',
		langDir: 'locales',
		locales: [
			{ code: 'en', iso: 'en-US', name: 'English (US)', file: 'en.ts' },
			{ code: 'pt', iso: 'pt-BR', name: 'Português (BR)', file: 'pt.ts' },
		],
	},
})`

const code2 = `{ "type": 0, "start": 0, "end": 2, "loc": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 1, "column": 3, "offset": 2 }, "source": "Fr" }, "body": { "type": 2, "start": 0, "end": 2, "loc": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 1, "column": 3, "offset": 2 } }, "items": [ { "type": 3, "start": 0, "end": 2, "loc": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 1, "column": 3, "offset": 2 } } } ], "static": "Fr" } }`

const code3 = `<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

function changeLang() {
	const primeConfig = usePrimeVue()
	// Warns [Vue warn]: inject() can only be used inside setup() or functional components. 
	// Throws Uncaught Error: PrimeVue is not installed!
	if (locale.value === 'en') {
		setLocale('pt')
		primeConfig.config.locale = primept
	}
	else {
		setLocale('en')
		primeConfig.config.locale = primeen
	}
}
<\/script>`

const code4 = `<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

const primeConfig = usePrimeVue()

onMounted(() => {
	if (locale.value === 'en')
		primeConfig.config.locale = primeen
	else
		primeConfig.config.locale = primept
})

function changeLang() {
	if (locale.value === 'en') {
		setLocale('pt')
		primeConfig.config.locale = primept
	}
	else {
		setLocale('en')
		primeConfig.config.locale = primeen
	}
}
<\/script>

<template>
	<button aria-label="Switch Language" @click="changeLang">
		<Icon
			:name="locale === 'pt' ? 'openmoji:flag-brazil' : 'openmoji:flag-united-states'"
			size="24"
		/>
	<\/button>
<\/template>`
</script>

<template>
	<div>
		<div class="px-20 py-5 space-y-10 text-center lg:space-y-20 sm:text-start">
			<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
				{{ t('posts.primevue_locale_dynamic.title') }}
			</p>
		</div>
		<div class="text-[#4C4F69] dark:text-[#CDD5F4] mt-10 px-10 md:px-40 space-y-5">
			<p>{{ t('posts.primevue_locale_dynamic.paragraph1') }}</p>
			<p>{{ t('posts.primevue_locale_dynamic.paragraph2') }}</p>
			<p>{{ t('posts.primevue_locale_dynamic.paragraph3') }}</p>
			<NuxtLink to="https://github.com/primefaces/primelocale" external target="_blank" class="text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9] hover:border-[#F28AA9] hover:dark:border-[#F28AA9] border-b-2 inline-block">
				primefaces / primelocale
			</NuxtLink>
			<p>{{ t('posts.primevue_locale_dynamic.paragraph4') }}</p>
			<p>{{ t('posts.primevue_locale_dynamic.paragraph5') }}</p>
			<hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-600">
			<p>{{ t('posts.primevue_locale_dynamic.paragraph6') }}</p>
			<CodeHighlight file-name="nuxt.config.ts" :code="code1" />
			<p>{{ t('posts.primevue_locale_dynamic.paragraph7') }}</p>
			<pre>
/locales
----/en.ts
----/pt.ts
----/primeEN.ts
----/primePT.ts
			</pre>
			<p>{{ t('posts.primevue_locale_dynamic.paragraph8') }}</p>
			<CodeHighlight file-name="Primevue Component Text" :code="code2" lang="json" />
			<p>{{ t('posts.primevue_locale_dynamic.paragraph9') }}</p>
			<hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-600">
			<p>{{ t('posts.primevue_locale_dynamic.paragraph10') }}</p>
			<CodeHighlight file-name="/components/Navbar.vue" :code="code3" />
			<p>{{ t('posts.primevue_locale_dynamic.paragraph11') }}</p>
			<CodeHighlight file-name="/components/Navbar.vue" :code="code4" />
			<p>{{ t('posts.primevue_locale_dynamic.paragraph12') }}</p>
			<p>{{ t('posts.primevue_locale_dynamic.paragraph13') }}</p>
		</div>
	</div>
</template>
