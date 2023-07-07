<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
    title: `Gabriel Rosa - ${t('navbar.apps')}`
})
</script>
<template>
    <section class="min-h-[calc(100vh-2rem)] flex items-center justify-center relative">
        <div class="grid place-items-center">
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="https://karinebarbosa.com" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/karinebarbosa.png" alt="Karine Barbosa WebSite" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-[4.5rem] font-bold text-xl">Karine Barbosa</h3>
                    </figcaption>
                </a>
                <a href="https://www.npmjs.com/package/ldap-sha512" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/ldap-sha512.png" alt="Ldap-Sha512" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-[4.5rem] font-bold text-xl">Ldap-Sha512</h3>
                    </figcaption>
                </a>
            </div>
        </div>
    </section>
</template>