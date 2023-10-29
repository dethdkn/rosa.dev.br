export default defineNuxtConfig({
	css: ['~/assets/style.sass'],
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-icon', '@nuxtseo/module'],
	tailwindcss: {
		cssPath: false,
		configPath: 'tailwind.config.ts'
	},
	i18n: {
		vueI18n: './i18n.config.ts'
	},
	robots: {
		sitemap: '/sitemap.xml',
		credits: false
	},
	sitemap: {
		sitemapName: 'sitemap.xml',
		credits: false
	},
	site: {
		url: 'https://rosa.dev.br',
		name: 'Gabriel Rosa',
		description:
			'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.',
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
