<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('blog.title') })

useSeoMeta({ description: t('blog.description') })

defineOgImageComponent('Techs', { title: t('blog.title') })

const posts = computed(() => [
  {
    title: t('posts.primevue_locale_dynamic.title'),
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
      { title: 'PrimeVue', icon: 'prime:prime', color: '#41B883' },
      { title: 'i18n', icon: 'material-symbols:language-chinese-dayi', color: '#FCC72B' },
    ],
    urls: [
      { url: '/blog/how-to-switch-primevue-locale-dynamically', external: false, icon: 'iconoir:open-in-browser', aria: 'URL' },
    ],
    description: t('posts.primevue_locale_dynamic.description'),
    locale: true,
    self: true,
  },
  {
    title: t('posts.customizable_multiboot_pendrive.title'),
    badges: [
      { title: 'Ventoy', icon: 'material-symbols:usb', color: '#FCD134' },
    ],
    urls: [
      { url: '/blog/customizable-multiboot-pendrive', external: false, icon: 'iconoir:open-in-browser', aria: 'URL' },
    ],
    description: t('posts.customizable_multiboot_pendrive.description'),
    locale: true,
    self: true,
  },
  {
    title: t('posts.installing_arch_linux.title'),
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
      { title: 'Arch', icon: 'devicon:archlinux', color: '#2A90CF' },
    ],
    urls: [
      { url: '/blog/installing-arch-linux', external: false, icon: 'iconoir:open-in-browser', aria: 'URL' },
    ],
    description: t('posts.installing_arch_linux.description'),
    locale: true,
    self: true,
  },
])
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="border-candy text-obsidian dark:text-snow inline border-b-2 text-4xl">
      {{ t('blog.title') }}
    </h1>
    <List v-for="{title, badges, urls, description, locale, self} in posts" :key="title" :title :badges :urls :description :locale :self data-aos="fade-right" />
  </div>
</template>
