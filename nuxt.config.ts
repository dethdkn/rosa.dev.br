export default defineNuxtConfig({
	css: ['~/assets/style.sass'],
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
		'@vueuse/nuxt',
		'nuxt-icon',
		'nuxt-simple-sitemap'
	],
	i18n: {
		vueI18n: './i18n.config.ts'
	},
	site: {
		url: 'https://example.com'
	},
	app: {
		head: {
			htmlAttrs: {lang: 'en', class: 'dark'},
			title: 'Gabriel Rosa',
			meta: [
				{'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
				{name: 'robots', content: 'index, follow'},
				{property: 'og:type', content: 'website'},
				{property: 'og:title', content: 'Gabriel Rosa'},
				{property: 'og:site_name', content: 'Gabriel Rosa'},
				{property: 'twitter:title', content: 'Gabriel Rosa'},
				{property: 'og:url', content: 'https://rosa.dev.br/'},
				{property: 'og:image', content: 'https://rosa.dev.br/favicon.ico'},
				{property: 'twitter:card', content: 'summary'},
				{property: 'twitter:creator', content: '@dethdkn'},
				{
					property: 'twitter:image',
					content: 'https://rosa.dev.br/favicon.ico'
				},
				{
					name: 'description',
					content:
						'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.'
				},
				{
					property: 'og:description',
					content:
						'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.'
				},
				{
					property: 'twitter:description',
					content:
						'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.'
				}
			],
			link: [
				{rel: 'canonical', href: 'https://rosa.dev.br/'},
				{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
			]
		},
		pageTransition: {name: 'slide-right', mode: 'out-in'}
	},
	devtools: {
		enabled: true,
		timeline: {enabled: true}
	}
})
