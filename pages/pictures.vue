<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
    title: 'Gabriel Rosa - '+t('navbar.pictures')
})
</script>
<template>
    <section class="min-h-[calc(100vh-2rem)] flex items-center justify-center relative">
        <div class="grid place-items-center">
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <div class="relative">
                    <img src="../assets/santos_dumont.png" alt="" class="rounded-2xl w-64 h-[12.25rem] m-5">
                </div>
                <div class="relative">
                    <img src="../assets/data_center.png" alt="" class="rounded-2xl w-64 h-[12.25rem] m-5">
                </div>
                <div class="relative">
                    <img src="../assets/cbpf_confraternizacao.png" alt="" class="rounded-2xl w-64 h-[12.25rem] m-5">
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <div class="relative">
                    <img src="../assets/cbpf_cotec.png" alt="" class="rounded-2xl w-64 h-[12.25rem] m-5">
                </div>
            </div>
        </div>
    </section>
</template>