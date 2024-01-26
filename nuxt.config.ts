export default defineNuxtConfig({
	css: ['~/assets/global.sass'],
	modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/seo', '@nuxtjs/google-fonts', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-icon'],
	app: {
		head: {
			templateParams: {
				separator: '•',
			},
		},
	},
	colorMode: {
		preference: 'dark',
		fallback: 'dark',
		classSuffix: '',
	},
	googleFonts: {
		families: {
			'Montserrat+Alternates': true,
			'Delius+Unicase': true,
		},
	},
	i18n: {
		baseUrl: 'https://rosa.dev.br/',
		defaultLocale: 'en',
		langDir: 'locales',
		locales: [
			{ code: 'en', iso: 'en-US', name: 'English (US)', file: 'en.ts' },
			{ code: 'pt', iso: 'pt-BR', name: 'Português (BR)', file: 'pt.ts' },
		],
	},
	site: {
		url: 'https://rosa.dev.br/',
		name: 'Gabriel Rosa',
		description: 'Full Stack Developer',
		defaultLocale: 'en',
		twitter: '@DethDKN',
		identity: {
			type: 'Person',
		},
	},
	linkChecker: {
		enabled: false,
	},
	devtools: {
		enabled: true,
	},
})
