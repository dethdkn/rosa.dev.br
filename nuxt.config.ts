export default defineNuxtConfig({
	css: ['~/assets/global.sass'],
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-icon', '@nuxtseo/module'],
	tailwindcss: {
		config: {darkMode: 'class'}
	},
	i18n: {
		baseUrl: 'https://rosa.dev.br/',
		defaultLocale: 'en',
		langDir: 'locales',
		locales: [
			{code: 'en', iso: 'en-US', name: 'English (US)', file: 'en.json'},
			{code: 'pt', iso: 'pt-BR', name: 'Português (BR)', file: 'pt.json'}
		],
		strategy: 'no_prefix'
	},
	site: {
		url: 'https://rosa.dev.br/',
		name: 'Gabriel Rosa',
		description: 'Full Stack Developer | IT Technician | Persona Fan',
		defaultLocale: 'en',
		twitter: '@DethDKN',
		identity: {
			type: 'Person'
		}
	},
	app: {
		head: {
			htmlAttrs: {class: 'dark'}
		},
		pageTransition: {name: 'slide-right', mode: 'out-in'}
	},
	devtools: {
		enabled: true,
		timeline: {enabled: true}
	}
})
