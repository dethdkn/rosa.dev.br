export default defineNuxtConfig({
    css: ['~/assets/style.sass', '@fortawesome/fontawesome-svg-core/styles.css'],
    build: {
        transpile: [
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-brands-svg-icons'
        ]
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    modules: [
        'nuxt-simple-sitemap'
    ],
    runtimeConfig: {
        public: {
            siteUrl: 'https://rosa.dev.br',
        }
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'Gabriel Rosa',
            meta: [
                {name: 'description', content: 'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.'},
                {name: 'robots', content: 'index, follow'},
                {property: 'og:type', content: 'website'},
                {property: 'og:title', content: 'Gabriel Rosa'},
                {property: 'og:description', content: 'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.'},
                {property: 'og:image', content: 'https://rosa.dev.br/favicon.ico'},
                {property: 'og:url', content: 'https://rosa.dev.br/'},
                {property: 'og:site_name', content: 'Gabriel Rosa'},
                {property: 'twitter:title', content: 'Gabriel Rosa'},
                {property: 'twitter:description', content: 'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.'},
                {property: 'twitter:image', content: 'https://rosa.dev.br/favicon.ico'},
                {property: 'twitter:card', content: 'summary'},
                {property: 'twitter:creator', content: '@dethdkn'},
                {"http-equiv": 'X-UA-Compatible', content: 'IE=edge'}
            ],
            link: [
                {rel: 'canonical', href: 'https://rosa.dev.br/'},
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
            ]
        },
        pageTransition: { name: 'slide-right', mode: 'out-in' }
    },
    devtools: { enabled: true }
})