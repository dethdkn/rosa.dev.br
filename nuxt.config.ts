export default defineNuxtConfig({
	css: ['~/assets/global.sass', 'animate.css/animate.min.css'],
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-icon', '@nuxtseo/module'],
	tailwindcss: {
		config: { darkMode: 'class' },
	},
	i18n: {
		baseUrl: 'https://rosa.dev.br/',
		defaultLocale: 'en',
		langDir: 'locales',
		locales: [
			{ code: 'en', iso: 'en-US', name: 'English (US)', file: 'en.ts' },
			{ code: 'pt', iso: 'pt-BR', name: 'Português (BR)', file: 'pt.ts' },
		],
		strategy: 'no_prefix',
		detectBrowserLanguage: false,
	},
	site: {
		url: 'https://rosa.dev.br/',
		name: 'Gabriel Rosa',
		description: 'Full Stack Developer | IT Technician | Persona Fan',
		defaultLocale: 'en',
		twitter: '@DethDKN',
		identity: {
			type: 'Person',
		},
	},
	app: {
		head: {
			htmlAttrs: { class: 'dark' },
		},
		pageTransition: { name: 'slide-right', mode: 'out-in' },
	},
	linkChecker: {
		enabled: false,
	},
	devtools: {
		enabled: true,
		timeline: { enabled: true },
	},
})
