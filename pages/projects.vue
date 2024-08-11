<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('projects.title') })

useSeoMeta({ description: t('projects.description') })

defineOgImageComponent('Techs', { title: t('projects.title') })

const projects = computed(() => [
  {
    title: 'Posgrad COEDU',
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'Primevue', icon: 'simple-icons:primeng', color: '#10B981' },
      { title: 'TailwindCSS', icon: 'devicon:tailwindcss', color: '#38BDF8' },
      { title: 'LdapJS', icon: 'fxemoji:folder', color: '#59C9FC' },
      { title: 'Mongoose', icon: 'devicon:mongoose', color: '#840000' },
    ],
    urls: [
      { url: 'https://posgrad.coedu.cbpf.br', external: true, icon: 'iconoir:open-new-window', aria: 'URL' },
    ],
    description: t('projects.posgrad_description'),
  },
  {
    title: 'Litcomp-AI',
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'Nuxt UI', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'TailwindCSS', icon: 'devicon:tailwindcss', color: '#38BDF8' },
    ],
    urls: [
      { url: 'https://litcomp.cbpf.br/ai', external: true, icon: 'iconoir:open-new-window', aria: 'URL' },
    ],
    description: t('projects.litcomp_ai_description'),
  },
  {
    title: 'ESLint Config',
    badges: [
      { title: 'Typescript', icon: 'devicon:typescript', color: '#137ACC' },
      { title: 'Eslint', icon: 'devicon:eslint', color: '#4B32C3' },
    ],
    urls: [
      { url: 'https://github.com/dethdkn/eslint-config', external: true, icon: 'iconoir:github-circle', aria: 'Github Repo' },
      { url: 'https://www.npmjs.com/package/@dethdkn/eslint-config', external: true, icon: 'iconoir:npm', aria: 'NPM Package' },
      { url: 'https://eslint.rosa.dev.br/configs', external: true, icon: 'iconoir:search', aria: 'Eslint Inspector' },
    ],
    description: t('projects.eslint_config_description'),
  },
  {
    title: 'RSDC Agenda',
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'Vuetify', icon: 'devicon:vuetify', color: '#2D97F6' },
      { title: 'TailwindCSS', icon: 'devicon:tailwindcss', color: '#38BDF8' },
      { title: 'LdapJS', icon: 'fxemoji:folder', color: '#59C9FC' },
      { title: 'Mongoose', icon: 'devicon:mongoose', color: '#840000' },
    ],
    urls: [
      { url: 'https://youtu.be/i1UOcPqPjow', external: true, icon: 'iconoir:media-video', aria: 'Video' },
    ],
    description: t('projects.rsdc_agenda_description'),
  },
  {
    title: 'Agenda de Auditórios',
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'Nuxt UI', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'TailwindCSS', icon: 'devicon:tailwindcss', color: '#38BDF8' },
      { title: 'LdapJS', icon: 'fxemoji:folder', color: '#59C9FC' },
      { title: 'Mongoose', icon: 'devicon:mongoose', color: '#840000' },
    ],
    urls: [
      { url: 'https://auditorios.cbpf.br', external: true, icon: 'iconoir:open-new-window', aria: 'URL' },
    ],
    description: t('projects.agenda_auditorios_description'),
  },
  {
    title: 'ID CBPF',
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'Nuxt UI', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'TailwindCSS', icon: 'devicon:tailwindcss', color: '#38BDF8' },
      { title: 'LdapJS', icon: 'fxemoji:folder', color: '#59C9FC' },
      { title: 'Mongoose', icon: 'devicon:mongoose', color: '#840000' },
    ],
    urls: [
      { url: 'https://youtu.be/7pA9iAF2DkQ', external: true, icon: 'iconoir:media-video', aria: 'Video' },
    ],
    description: t('projects.idcbpf_description'),
  },
  {
    title: 'gov.br/cbpf (cbpf.br)',
    badges: [
      { title: 'Plone', icon: 'cc:plone', color: '#0095D3' },
    ],
    urls: [
      { url: 'https://cbpf.br', external: true, icon: 'iconoir:open-new-window', aria: 'URL' },
    ],
    description: t('projects.govbr_description'),
  },
  {
    title: 'Ldap-Passwords',
    badges: [
      { title: 'NodeJS', icon: 'vscode-icons:file-type-node', color: '#83CD29' },
      { title: 'Typescript', icon: 'devicon:typescript', color: '#137ACC' },
      { title: 'Vitest', icon: 'devicon:vitest', color: '#FCC72B' },
    ],
    urls: [
      { url: 'https://ldap-passwords.com', external: true, icon: 'iconoir:open-new-window', aria: 'URL' },
      { url: 'https://github.com/dethdkn/ldap-passwords', external: true, icon: 'iconoir:github-circle', aria: 'Github Repo' },
      { url: 'https://www.npmjs.com/package/ldap-passwords', external: true, icon: 'iconoir:npm', aria: 'NPM Package' },
    ],
    description: t('projects.ldappasswords_description'),
  },
  {
    title: 'hamiltonmarcenaria.com',
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'TailwindCSS', icon: 'devicon:tailwindcss', color: '#38BDF8' },
    ],
    urls: [
      { url: 'https://hamiltonmarcenaria.com', external: true, icon: 'iconoir:open-new-window', aria: 'URL' },
      { url: 'https://github.com/dethdkn/hamiltonmarcenaria.com', external: true, icon: 'iconoir:github-circle', aria: 'Github Repo' },
    ],
    description: t('projects.hamilton_description'),
  },
  {
    title: 'rosa.dev.br',
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'TailwindCSS', icon: 'devicon:tailwindcss', color: '#38BDF8' },
    ],
    urls: [
      { url: '/', external: false, icon: 'iconoir:open-new-window', aria: 'URL' },
      { url: 'https://github.com/dethdkn/rosa.dev.br', external: true, icon: 'iconoir:github-circle', aria: 'Github Repo' },
    ],
    description: t('projects.rosa_description'),
  },
])
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="inline border-b-2 border-[#F28AA9] text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
      {{ t('projects.title') }}
    </h1>
    <List v-for="{title, badges, urls, description} in projects" :key="title" :title :badges :urls :description />
  </div>
</template>
