// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/style.sass', '@fortawesome/fontawesome-svg-core/styles.css'],
    build: {
        transpile: [
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/pro-solid-svg-icons',
            '@fortawesome/free-brands-svg-icons'
        ]
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    app: {
        head: {
            title: 'Gabriel Rosa',
            meta: [
                {name: 'description', content: 'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.'},
                {name: 'robots', content: 'index, follow'},
                {property: 'og:type', content: 'website'},
                {property: 'og:title', content: 'Gabriel Rosa'},
                {property: 'og:description', content: 'I work at the Brazilian Center for Physics Research as a Full Stack Developer. I am passionate about Development and System.'},
                {property: 'og:image', content: 'http://rosa.dev.br/favicon.ico'},
                {property: 'og:url', content: 'http://rosa.dev.br/'},
                {property: 'og:site_name', content: 'Gabriel Rosa'},
                {"http-equiv": 'X-UA-Compatible', content: 'IE=edge'}
            ],
            link: [
                {rel: 'canonical', href: 'http://rosa.dev.br/'},
            ]
        }
    }
})