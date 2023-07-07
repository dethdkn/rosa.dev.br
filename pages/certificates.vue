<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
    title: `Gabriel Rosa - ${t('navbar.certificates')}`
})
</script>
<template>
    <section class="min-h-[calc(100vh-2rem)] flex items-center justify-center relative">
        <div class="grid place-items-center">
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Informatica_Empresarial_Says.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/says.png" alt="Says Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">Informática Empresarial</h3>
                        <h4 class="font-semibold text-lg">Says Centro de Ensino</h4>
                        <p class="font-semibold text-base">10/2013</p>
                    </figcaption>
                </a>
                <a href="/certificados/English_High_Advanced_Says.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/says.png" alt="Says Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">English - High Advanced</h3>
                        <h4 class="font-semibold text-lg">Says Centro de Ensino</h4>
                        <p class="font-semibold text-base">07/2019</p>
                    </figcaption>
                </a>
                <a href="/certificados/English_Especialization_Says.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/says.png" alt="Says Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">English - Specialization Course</h3>
                        <h4 class="font-semibold text-lg">Says Centro de Ensino</h4>
                        <p class="font-semibold text-base">07/2019</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Algoritmo0_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">PROGRAMAÇÃO BÁSICA - MÓDULO 00: PRIMEIROS PASSOS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Algoritmo1_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">PROGRAMAÇÃO BÁSICA - MÓDULO 01: PRIMEIROS COMANDOS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Linux0_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINUX - MÓDULO 00: PRIMEIROS PASSOS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Linux1_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINUX - MÓDULO 01: INTERFACE E TERMINAL</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Linux2_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINUX - MÓDULO 02: PACOTES E GESTÃO DE PROCESSOS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Linux3_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINUX - MÓDULO 03: PROGRAMAÇÃO COM LINUX</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Linux4_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINUX - MÓDULO 04: TERMINAL AVANÇADO</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Linux5_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINUX - MÓDULO 05: DISCOS E RAID</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Linux_Curso_em_Video.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/cursoemvideo.png" alt="Curso em Vídeo Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINUX</h3>
                        <h4 class="font-semibold text-lg">Curso em Vídeo</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Algoritmo_Curso_em_Video.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/cursoemvideo.png" alt="Curso em Vídeo Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">ALGORITMO</h3>
                        <h4 class="font-semibold text-lg">Curso em Vídeo</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Hardware_Curso_em_Video.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/cursoemvideo.png" alt="Curso em Vídeo Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">HARDWARE</h3>
                        <h4 class="font-semibold text-lg">Curso em Vídeo</h4>
                        <p class="font-semibold text-base">08/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Algoritmo2_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">PROGRAMAÇÃO BÁSICA - MÓDULO 02: CONDICIONAIS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">09/2021</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Algoritmo3_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">PROGRAMAÇÃO BÁSICA - MÓDULO 03: REPETIÇÕES</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">09/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Algoritmo4_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">PROGRAMAÇÃO BÁSICA - MÓDULO 04: VARIÁVEIS COMPOSTAS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">09/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Algoritmo5_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">PROGRAMAÇÃO BÁSICA - MÓDULO 05: ROTINAS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">09/2021</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/C0_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINGUAGEM C - MÓDULO 00: PRIMEIROS PASSOS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">09/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/C1_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINGUAGEM C - MÓDULO 01: ESTRUTURAS BÁSICAS</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">09/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/C2_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">LINGUAGEM C - MÓDULO 02: OPERADORES</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">09/2021</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/C3_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-6 font-bold text-xl">LINGUAGEM C - MÓDULO 03: ESTRUTURAS DE CONTROLE (CONDIÇÕES)</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">09/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Redes0_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-3 font-bold text-xl">REDES DE COMPUTADORES - MÓDULO 00: FUNDAMENTOS DE REDE</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">11/2021</p>
                    </figcaption>
                </a>
                <a href="/certificados/Web1_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-8 font-bold text-xl">DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 1 DE 5</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">07/2022</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Web2_Estudonauta.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/estudonauta.png" alt="Estudonauta Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-8 font-bold text-xl">DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 2 DE 5</h3>
                        <h4 class="font-semibold text-lg">Estudonauta</h4>
                        <p class="font-semibold text-base">07/2022</p>
                    </figcaption>
                </a>
                <a href="/certificados/Windows_Prompt_Comando_Alura.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/alura.png" alt="Alura Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-8 font-bold text-xl">Windows Prompt: Trabalhando na linha de comando</h3>
                        <h4 class="font-semibold text-lg">Alura</h4>
                        <p class="font-semibold text-base">08/2022</p>
                    </figcaption>
                </a>
                <a href="/certificados/Linux1_Alura.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/alura.png" alt="Alura Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-8 font-bold text-xl">Linux I: conhecendo e utilizando o terminal</h3>
                        <h4 class="font-semibold text-lg">Alura</h4>
                        <p class="font-semibold text-base">08/2022</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Tecnologia_de_Redes_WTR.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/wtr.png" alt="WTR Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-3 font-bold text-xl">Workshop de Tecnologia de Redes do Ponto de Presença da RNP no Rio de Janeiro</h3>
                        <h4 class="font-semibold text-lg">WTR</h4>
                        <p class="font-semibold text-base">09/2022</p>
                    </figcaption>
                </a>
                <a href="/certificados/Office365_Linkedin.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/linkedinlearning.png" alt="Linkedin Learning Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">Descubra o Microsoft Office 365</h3>
                        <h4 class="font-semibold text-lg">Linkedin Learning</h4>
                        <p class="font-semibold text-base">09/2022</p>
                    </figcaption>
                </a>
                <a href="/certificados/JavaScript0_Alura.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/alura.png" alt="Alura Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">JavaScript: explorando a linguagem</h3>
                        <h4 class="font-semibold text-lg">Alura</h4>
                        <p class="font-semibold text-base">09/2022</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Linux2_Alura.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/alura.png" alt="Alura Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">Linux II: programas, processos e pacotes</h3>
                        <h4 class="font-semibold text-lg">Alura</h4>
                        <p class="font-semibold text-base">09/2022</p>
                    </figcaption>
                </a>
                <a href="/certificados/Git_Linkedin.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/linkedinlearning.png" alt="Linkedin Learning Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">Git e GitHub: Formação Básica</h3>
                        <h4 class="font-semibold text-lg">Linkedin Learning</h4>
                        <p class="font-semibold text-base">09/2022</p>
                    </figcaption>
                </a>
                <a href="/certificados/NodeJS_MVC_RestAPI_GraphQL_Deno_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-6 font-bold text-xl">NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">11/2022</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/Nginx_Apache_ssl_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-6 font-bold text-xl">NGINX, Apache, SSL Encryption - Certification Course</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">11/2022</p>
                    </figcaption>
                </a>
                <a href="/certificados/Git_Github_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">Git & GitHub - The Practical Guide</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">11/2022</p>
                    </figcaption>
                </a>
                <a href="/certificados/Javascript_Jquery_VueJS_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-6 font-bold text-xl">Complete Javascript & jQuery Course with Bonus VueJS Intro</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">12/2022</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/JavaScript_Beginner%2BAdvanced_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-6 font-bold text-xl">JavaScript - The Complete Guide 2023 (Beginner + Advanced)</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">02/2023</p>
                    </figcaption>
                </a>
                <a href="/certificados/SQL_MySQL%2BPostgreSQL_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-6 font-bold text-xl">SQL - The Complete Developer's Guide (Mysql, PostgreSQL)</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">02/2023</p>
                    </figcaption>
                </a>
                <a href="/certificados/MongoDB_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">MongoDB - The Complete Developer's Guide 2023</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">02/2023</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/MERN_Fullstack_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-6 font-bold text-xl">React, NodeJS, Express & MongoDB - The MERN Fullstack Guide</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">02/2023</p>
                    </figcaption>
                </a>
                <a href="/certificados/CSS_SASS_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-6 font-bold text-xl">CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">04/2023</p>
                    </figcaption>
                </a>
                <a href="/certificados/TypeScript_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-10 font-bold text-xl">Understanding TypeScript</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">04/2023</p>
                    </figcaption>
                </a>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
                <a href="/certificados/VueJS_Router_CompositionAPI_Udemy.pdf" target="_blank" class="relative cursor-pointer group">
                    <img src="../assets/udemy.png" alt="Udemy Logo" class="rounded-2xl w-64 h-[12.25rem] m-5">
                    <figcaption class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block">
                        <h3 class="mt-5 font-bold text-xl">Vue - The Complete Guide (incl. Router & Composition API)</h3>
                        <h4 class="font-semibold text-lg">Udemy</h4>
                        <p class="font-semibold text-base">04/2023</p>
                    </figcaption>
                </a>
            </div>
        </div>
    </section>
</template>