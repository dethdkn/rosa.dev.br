<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
if(process.client){
    localStorage.getItem("theme") === 'light' ? document.getElementsByTagName( 'html' )[0].classList.remove('dark') : document.getElementsByTagName( 'html' )[0].classList.add('dark')
}
const route = useRouter()
const myCurrentRoute = route.currentRoute
const checkRoute = (current: string = '', nav: string[]) => {
    return nav.includes(current) ? 'navbar-link-active' : 'bg group navbar-link';
}
const changeTheme = () =>{
    const htmlClasses = document.getElementsByTagName( 'html' )[0].classList
    if(htmlClasses.contains('dark')){
        htmlClasses.remove('dark')
        localStorage.setItem('theme', 'light')
    }else{
        htmlClasses.add('dark')
        localStorage.setItem('theme', 'dark')
    }
}
const changeLanguage = () => {
    if (locale.value === 'en-US') {
        locale.value = 'pt-BR'
        localStorage.setItem('language', 'pt-BR')
    } else {
        locale.value = 'en-US'
        localStorage.setItem('language', 'en-US')
    }
}
const ano = ref(new Date().getFullYear())
</script>
<template>
    <aside class="sidebar fixed min-h-screen w-[3.35rem] hover:w-60 z-50 overflow-hidden border-r bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow-lg transition-500 overflow-y-auto">
        <div class="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
                <div class="flex items-center w-max p-2.5 cursor-cell">
                    <img src="../assets/favicon.ico" class="w-8 h-8 inline-block" :alt="t('navbar.logo-alt')">
                    <h1 class="inline-block ml-4 font-medium text-center dark:text-white transition-1000">
                        <p>{{ t('navbar.title') }}</p>
                        <p class="text-xs">{{ t('navbar.subtitle') }}</p>
                    </h1>
                </div>
                <ul class="mt-6 space-y-2 tracking-wide">
                    <li class="min-w-max">
                        <NuxtLink to="/" :class="checkRoute(myCurrentRoute.fullPath, ['/'])">
                            <FaIcon icon="house" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.home') }}
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="min-w-max">
                        <NuxtLink to="/about" :class="checkRoute(myCurrentRoute.fullPath, ['/about'])">
                            <FaIcon icon="face-smile-beam" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.about') }}
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="min-w-max">
                        <NuxtLink to="/experience" :class="checkRoute(myCurrentRoute.fullPath, ['/experience'])">
                            <FaIcon icon="briefcase" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.experience') }}
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="min-w-max">
                        <NuxtLink to="/certificates" :class="checkRoute(myCurrentRoute.fullPath, ['/certificates'])">
                            <FaIcon icon="circle-check" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.certificates') }}
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="min-w-max">
                        <NuxtLink to="/apps-pages" :class="checkRoute(myCurrentRoute.fullPath, ['/apps-pages'])">
                            <FaIcon icon="code" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.apps') }}
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="min-w-max">
                        <NuxtLink to="/pictures" :class="checkRoute(myCurrentRoute.fullPath, ['/pictures'])">
                            <FaIcon icon="camera" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.pictures') }}
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="min-w-max">
                        <NuxtLink to="/videos" :class="checkRoute(myCurrentRoute.fullPath, ['/videos'])">
                            <FaIcon icon="circle-play" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.videos') }}
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="min-w-max">
                        <NuxtLink to="/download" :class="checkRoute(myCurrentRoute.fullPath, ['/downloads'])">
                            <FaIcon icon="cloud-arrow-down" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.downloads') }}
                            </span>
                        </NuxtLink>
                    </li>
                    <li class="min-w-max">
                        <NuxtLink to="/socials-contact" :class="checkRoute(myCurrentRoute.fullPath, ['/socials-contact'])">
                            <FaIcon icon="user-plus" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.socials') }}
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="w-max -mb-3">
                <span class="bg group navbar-link cursor-pointer" @click="changeTheme">
                    <FaIcon icon="circle" class="mr-2 group-hover:text-sky-600"/>
                    <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                        {{ t('navbar.theme') }}
                    </span>
                </span>
                <span class="bg group navbar-link cursor-pointer" @click="changeLanguage">
                    <FaIcon icon="language" class="mr-2 group-hover:text-sky-600"/>
                    <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                        {{ t('navbar.language') }}
                    </span>
                </span>
            </div>
        </div>
    </aside>
    <main class="min-h-[calc(100vh-1.97rem)] ml-[3.35rem] bg-gray-100 dark:bg-gray-900 transition-500">
        <slot/>
    </main>
    <footer class="bg-cyan-500 m-auto text-center text-gray-100 dark:text-gray-800 ml-[3.35rem] p-1 transition-500">
        <FaIcon icon="copyright"/>
        <p class="font-bold inline-block ml-2">{{ ano }}</p>
    </footer>
</template>