<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
defineProps({
    myCurrentRoute: String
})
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
                        <RouterLink to="/" :class="checkRoute(myCurrentRoute, ['/'])">
                            <FaIcon icon="house" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.home') }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="min-w-max">
                        <RouterLink to="/about" :class="checkRoute(myCurrentRoute, ['/about'])">
                            <FaIcon icon="face-smile-beam" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.about') }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="min-w-max">
                        <RouterLink to="/experience" :class="checkRoute(myCurrentRoute, ['/experience'])">
                            <FaIcon icon="briefcase" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.experience') }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="min-w-max">
                        <RouterLink to="/certificates" :class="checkRoute(myCurrentRoute, ['/certificates'])">
                            <FaIcon icon="circle-check" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.certificates') }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="min-w-max">
                        <RouterLink to="/apps-pages" :class="checkRoute(myCurrentRoute, ['/apps-pages'])">
                            <FaIcon icon="code" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.apps') }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="min-w-max">
                        <RouterLink to="/pictures" :class="checkRoute(myCurrentRoute, ['/pictures'])">
                            <FaIcon icon="camera" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.pictures') }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="min-w-max">
                        <RouterLink to="/videos" :class="checkRoute(myCurrentRoute, ['/videos'])">
                            <FaIcon icon="circle-play" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.videos') }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="min-w-max">
                        <RouterLink to="/downloads" :class="checkRoute(myCurrentRoute, ['/downloads'])">
                            <FaIcon icon="cloud-arrow-down" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.downloads') }}
                            </span>
                        </RouterLink>
                    </li>
                    <li class="min-w-max">
                        <RouterLink to="/socials-contact" :class="checkRoute(myCurrentRoute, ['/socials-contact'])">
                            <FaIcon icon="user-plus" class="mr-2 group-hover:text-sky-600"/>
                            <span class="group-hover:text-gray-900 dark:group-hover:text-gray-400">
                                {{ t('navbar.socials') }}
                            </span>
                        </RouterLink>
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
</template>