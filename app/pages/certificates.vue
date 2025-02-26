<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('certificates.title') })

useSeoMeta({ description: t('certificates.description') })

defineOgImageComponent('Techs', { title: t('certificates.title') })

const certificates = ref([
  {
    href: '/certificates/Informatica_Empresarial_Says.pdf',
    title: 'Informática Empresarial',
    subtitle: '🎓 Says Centro de Ensino',
    concluded: '10/2013',
    badges: [
      { title: 'Windows', icon: 'logos:microsoft-windows-icon', color: '#2278D3' },
      { title: 'Word', icon: 'vscode-icons:file-type-word', color: '#2B7CD3' },
      { title: 'Excel', icon: 'vscode-icons:file-type-excel', color: '#2FA366' },
      { title: 'PowerPoint', icon: 'vscode-icons:file-type-powerpoint', color: '#ED6C47' },
    ],
  },
  {
    href: '/certificates/English_High_Advanced_Says.pdf',
    title: 'English - High Advanced',
    subtitle: '🎓 Says Centro de Ensino',
    concluded: '07/2019',
    badges: [
      { title: 'English', icon: 'streamline:dictionary-language-book', color: '#2B7CD3' },
    ],
  },
  {
    href: '/certificates/English_Especialization_Says.pdf',
    title: 'English - Specialization Course',
    subtitle: '🎓 Says Centro de Ensino',
    concluded: '07/2019',
    badges: [
      { title: 'English', icon: 'streamline:dictionary-language-book', color: '#2B7CD3' },
    ],
  },
  {
    href: '/certificates/Algoritmo0_Estudonauta.pdf',
    title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 00: PRIMEIROS PASSOS',
    subtitle: '🎓 Estudonauta',
    concluded: '08/2021',
    badges: [
      { title: 'Algorithm', icon: 'fa6-solid:code-merge', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Algoritmo1_Estudonauta.pdf',
    title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 01: PRIMEIROS COMANDOS',
    subtitle: '🎓 Estudonauta',
    concluded: '08/2021',
    badges: [
      { title: 'Algorithm', icon: 'fa6-solid:code-merge', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Linux0_Estudonauta.pdf',
    title: 'LINUX - MÓDULO 00: PRIMEIROS PASSOS',
    subtitle: '🎓 Estudonauta',
    concluded: '08/2021',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Linux1_Estudonauta.pdf',
    title: 'LINUX - MÓDULO 01: INTERFACE E TERMINAL',
    subtitle: '🎓 Estudonauta',
    concluded: '08/2021',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Linux2_Estudonauta.pdf',
    title: 'LINUX - MÓDULO 02: PACOTES E GESTÃO DE PROCESSOS',
    subtitle: '🎓 Estudonauta',
    concluded: '08/2021',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Linux3_Estudonauta.pdf',
    title: 'LINUX - MÓDULO 03: PROGRAMAÇÃO COM LINUX',
    subtitle: '🎓 Estudonauta',
    concluded: '08/2021',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Linux4_Estudonauta.pdf',
    title: 'LINUX - MÓDULO 04: TERMINAL AVANÇADO',
    subtitle: '🎓 Estudonauta',
    concluded: '08/2021',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Linux5_Estudonauta.pdf',
    title: 'LINUX - MÓDULO 05: DISCOS E RAID',
    subtitle: '🎓 Estudonauta',
    concluded: '08/2021',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Linux_Curso_em_Video.pdf',
    title: 'LINUX',
    subtitle: '🎓 Curso em Vídeo',
    concluded: '08/2021',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Algoritmo_Curso_em_Video.pdf',
    title: 'ALGORITMO',
    subtitle: '🎓 Curso em Vídeo',
    concluded: '08/2021',
    badges: [
      { title: 'Algorithm', icon: 'fa6-solid:code-merge', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Hardware_Curso_em_Video.pdf',
    title: 'HARDWARE',
    subtitle: '🎓 Curso em Vídeo',
    concluded: '08/2021',
    badges: [
      { title: 'Hardware', icon: 'ion:hardware-chip-outline', color: '#ED6C47' },
    ],
  },
  {
    href: '/certificates/Algoritmo2_Estudonauta.pdf',
    title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 02: CONDICIONAIS',
    subtitle: '🎓 Estudonauta',
    concluded: '09/2021',
    badges: [
      { title: 'Algorithm', icon: 'fa6-solid:code-merge', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Algoritmo3_Estudonauta.pdf',
    title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 03: REPETIÇÕES',
    subtitle: '🎓 Estudonauta',
    concluded: '09/2021',
    badges: [
      { title: 'Algorithm', icon: 'fa6-solid:code-merge', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Algoritmo4_Estudonauta.pdf',
    title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 04: VARIÁVEIS COMPOSTAS',
    subtitle: '🎓 Estudonauta',
    concluded: '09/2021',
    badges: [
      { title: 'Algorithm', icon: 'fa6-solid:code-merge', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Algoritmo5_Estudonauta.pdf',
    title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 05: ROTINAS',
    subtitle: '🎓 Estudonauta',
    concluded: '09/2021',
    badges: [
      { title: 'Algorithm', icon: 'fa6-solid:code-merge', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/C0_Estudonauta.pdf',
    title: 'LINGUAGEM C - MÓDULO 00: PRIMEIROS PASSOS',
    subtitle: '🎓 Estudonauta',
    concluded: '09/2021',
    badges: [
      { title: 'C', icon: 'devicon:c', color: '#659AD3' },
    ],
  },
  {
    href: '/certificates/C1_Estudonauta.pdf',
    title: 'LINGUAGEM C - MÓDULO 01: ESTRUTURAS BÁSICAS',
    subtitle: '🎓 Estudonauta',
    concluded: '09/2021',
    badges: [
      { title: 'C', icon: 'devicon:c', color: '#659AD3' },
    ],
  },
  {
    href: '/certificates/C2_Estudonauta.pdf',
    title: 'LINGUAGEM C - MÓDULO 02: OPERADORES',
    subtitle: '🎓 Estudonauta',
    concluded: '09/2021',
    badges: [
      { title: 'C', icon: 'devicon:c', color: '#659AD3' },
    ],
  },
  {
    href: '/certificates/C3_Estudonauta.pdf',
    title: 'LINGUAGEM C - MÓDULO 03: ESTRUTURAS DE CONTROLE (CONDIÇÕES)',
    subtitle: '🎓 Estudonauta',
    concluded: '09/2021',
    badges: [
      { title: 'C', icon: 'devicon:c', color: '#659AD3' },
    ],
  },
  {
    href: '/certificates/Redes0_Estudonauta.pdf',
    title: 'REDES DE COMPUTADORES - MÓDULO 00: FUNDAMENTOS DE REDE',
    subtitle: '🎓 Estudonauta',
    concluded: '11/2021',
    badges: [
      { title: 'Network', icon: 'iconoir:network', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Web1_Estudonauta.pdf',
    title: 'DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 1 DE 5',
    subtitle: '🎓 Estudonauta',
    concluded: '07/2022',
    badges: [
      { title: 'HTML5', icon: 'vscode-icons:file-type-html', color: '#E44F26' },
      { title: 'CSS3', icon: 'vscode-icons:file-type-css', color: '#2072B5' },
    ],
  },
  {
    href: '/certificates/Web2_Estudonauta.pdf',
    title: 'DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 2 DE 5',
    subtitle: '🎓 Estudonauta',
    concluded: '07/2022',
    badges: [
      { title: 'HTML5', icon: 'vscode-icons:file-type-html', color: '#E44F26' },
      { title: 'CSS3', icon: 'vscode-icons:file-type-css', color: '#2072B5' },
    ],
  },
  {
    href: '/certificates/Windows_Prompt_Comando_Alura.pdf',
    title: 'Windows Prompt: Trabalhando na linha de comando',
    subtitle: '🎓 Alura',
    concluded: '08/2022',
    badges: [
      { title: 'Windows', icon: 'logos:microsoft-windows-icon', color: '#2278D3' },
      { title: 'CMD', icon: 'humbleicons:prompt', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Linux1_Alura.pdf',
    title: 'Linux I: conhecendo e utilizando o terminal',
    subtitle: '🎓 Alura',
    concluded: '08/2022',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
      { title: 'Terminal', icon: 'humbleicons:prompt', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Tecnologia_de_Redes_WTR.pdf',
    title: 'Workshop de Tecnologia de Redes do Ponto de Presença da RNP no Rio de Janeiro',
    subtitle: '🎓 WTR',
    concluded: '09/2022',
    badges: [
      { title: 'Network', icon: 'iconoir:network', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Office365_Linkedin.pdf',
    title: 'Descubra o Microsoft Office 365',
    subtitle: '🎓 Linkedin Learning',
    concluded: '09/2022',
    badges: [
      { title: 'Word', icon: 'vscode-icons:file-type-word', color: '#2B7CD3' },
      { title: 'Excel', icon: 'vscode-icons:file-type-excel', color: '#2FA366' },
      { title: 'PowerPoint', icon: 'vscode-icons:file-type-powerpoint', color: '#ED6C47' },
    ],
  },
  {
    href: '/certificates/JavaScript0_Alura.pdf',
    title: 'JavaScript explorando a linguagem',
    subtitle: '🎓 Alura',
    concluded: '09/2022',
    badges: [
      { title: 'Javascript', icon: 'devicon:javascript', color: '#F0DB4F' },
    ],
  },
  {
    href: '/certificates/Linux2_Alura.pdf',
    title: 'Linux II: programas, processos e pacotes',
    subtitle: '🎓 Alura',
    concluded: '09/2022',
    badges: [
      { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
    ],
  },
  {
    href: '/certificates/Git_Linkedin.pdf',
    title: 'Git e GitHub: Formação Básica',
    subtitle: '🎓 Linkedin Learning',
    concluded: '09/2022',
    badges: [
      { title: 'Git', icon: 'devicon:git', color: '#F34F29' },
      { title: 'Github', icon: 'eva:github-fill', color: '#2B7CD3' },
    ],
  },
  {
    href: '/certificates/NodeJS_MVC_RestAPI_GraphQL_Deno_Udemy.pdf',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    subtitle: '🎓 Udemy',
    concluded: '11/2022',
    badges: [
      { title: 'NodeJS', icon: 'vscode-icons:file-type-node', color: '#83CD29' },
      { title: 'Javascript', icon: 'devicon:javascript', color: '#F0DB4F' },
      { title: 'Express', icon: 'simple-icons:express', color: '#2FA366' },
    ],
  },
  {
    href: '/certificates/Nginx_Apache_ssl_Udemy.pdf',
    title: 'NGINX, Apache, SSL Encryption - Certification Course',
    subtitle: '🎓 Udemy',
    concluded: '11/2022',
    badges: [
      { title: 'Nginx', icon: 'vscode-icons:file-type-nginx', color: '#2A9639' },
      { title: 'Apache', icon: 'devicon:apache', color: '#DC542E' },
      { title: 'SSL', icon: 'fxemoji:lock', color: '#FAB636' },
    ],
  },
  {
    href: '/certificates/Git_Github_Udemy.pdf',
    title: 'Git & GitHub - The Practical Guide',
    subtitle: '🎓 Udemy',
    concluded: '11/2022',
    badges: [
      { title: 'Git', icon: 'devicon:git', color: '#F34F29' },
      { title: 'Github', icon: 'eva:github-fill', color: '#2B7CD3' },
    ],
  },
  {
    href: '/certificates/Javascript_Jquery_VueJS_Udemy.pdf',
    title: 'Complete Javascript & jQuery Course with Bonus VueJS Intro',
    subtitle: '🎓 Udemy',
    concluded: '12/2022',
    badges: [
      { title: 'Javascript', icon: 'devicon:javascript', color: '#F0DB4F' },
      { title: 'Jquery', icon: 'devicon:jquery', color: '#0E68AB' },
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
    ],
  },
  {
    href: '/certificates/JavaScript_Beginner%2BAdvanced_Udemy.pdf',
    title: 'JavaScript - The Complete Guide 2023 (Beginner + Advanced)',
    subtitle: '🎓 Udemy',
    concluded: '02/2023',
    badges: [
      { title: 'Javascript', icon: 'devicon:javascript', color: '#F0DB4F' },
    ],
  },
  {
    href: '/certificates/SQL_MySQL%2BPostgreSQL_Udemy.pdf',
    title: `SQL - The Complete Developer's Guide (Mysql, PostgreSQL)`,
    subtitle: '🎓 Udemy',
    concluded: '02/2023',
    badges: [
      { title: 'MySQL', icon: 'devicon:mysql', color: '#19618A' },
      { title: 'PostgreSQL', icon: 'devicon:postgresql', color: '#336791' },
    ],
  },
  {
    href: '/certificates/MongoDB_Udemy.pdf',
    title: `MongoDB - The Complete Developer's Guide 2023`,
    subtitle: '🎓 Udemy',
    concluded: '02/2023',
    badges: [
      { title: 'MongoDB', icon: 'vscode-icons:file-type-mongo', color: '#4FA94C' },
      { title: 'Mongoose', icon: 'devicon:mongoose', color: '#840000' },
    ],
  },
  {
    href: '/certificates/MERN_Fullstack_Udemy.pdf',
    title: 'React, NodeJS, Express & MongoDB - The MERN Fullstack Guide',
    subtitle: '🎓 Udemy',
    concluded: '02/2023',
    badges: [
      { title: 'React', icon: 'devicon:react', color: '#61DAFB' },
      { title: 'NodeJS', icon: 'vscode-icons:file-type-node', color: '#83CD29' },
      { title: 'Express', icon: 'simple-icons:express', color: '#2FA366' },
      { title: 'MongoDB', icon: 'vscode-icons:file-type-mongo', color: '#4FA94C' },
    ],
  },
  {
    href: '/certificates/CSS_SASS_Udemy.pdf',
    title: 'CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)',
    subtitle: '🎓 Udemy',
    concluded: '04/2023',
    badges: [
      { title: 'CSS3', icon: 'vscode-icons:file-type-css', color: '#2072B5' },
      { title: 'Sass', icon: 'devicon:sass', color: '#CB6698' },
    ],
  },
  {
    href: '/certificates/TypeScript_Udemy.pdf',
    title: 'Understanding TypeScript',
    subtitle: '🎓 Udemy',
    concluded: '04/2023',
    badges: [
      { title: 'Typescript', icon: 'devicon:typescript', color: '#137ACC' },
    ],
  },
  {
    href: '/certificates/VueJS_Router_CompositionAPI_Udemy.pdf',
    title: 'Vue - The Complete Guide (incl. Router & Composition API)',
    subtitle: '🎓 Udemy',
    concluded: '04/2023',
    badges: [
      { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
    ],
  },
  {
    href: '/certificates/Nuxt3_Udemy.pdf',
    title: 'The Nuxt 3 Bootcamp - The Complete Developer Guide',
    subtitle: '🎓 Udemy',
    concluded: '08/2023',
    badges: [
      { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
    ],
  },
  {
    href: '/certificates/Javascript_Unit_Testing_Udemy.pdf',
    title: 'JavaScript Unit Testing - The Practical Guide',
    subtitle: '🎓 Udemy',
    concluded: '09/2023',
    badges: [
      { title: 'Vitest', icon: 'devicon:vitest', color: '#FCC72B' },
    ],
  },
  {
    href: '/certificates/Nginx_Udemy.pdf',
    title: 'NGINX Fundamentals: High Performance Servers from Scratch',
    subtitle: '🎓 Udemy',
    concluded: '03/2024',
    badges: [
      { title: 'Nginx', icon: 'vscode-icons:file-type-nginx', color: '#2A9639' },
    ],
  },
  {
    href: '/certificates/React_Udemy.pdf',
    title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
    subtitle: '🎓 Udemy',
    concluded: '02/2025',
    badges: [
      { title: 'React', icon: 'vscode-icons:file-type-reactjs', color: '#00D8FF' },
      { title: 'Redux', icon: 'devicon:redux', color: '#764ABC' },
    ],
  },
  {
    href: '/certificates/React_Typescript_Udemy.pdf',
    title: 'React & TypeScript - The Practical Guide',
    subtitle: '🎓 Udemy',
    concluded: '02/2025',
    badges: [
      { title: 'React', icon: 'vscode-icons:file-type-reactjs', color: '#00D8FF' },
      { title: 'Typescript', icon: 'devicon:typescript', color: '#137ACC' },
    ],
  },
  {
    href: '/certificates/Next_Udemy.pdf',
    title: 'Next.js 15 & React - The Complete Guide',
    subtitle: '🎓 Udemy',
    concluded: '02/2025',
    badges: [
      { title: 'Next', icon: 'vscode-icons:file-type-next', color: '#FFFFFF' },
      { title: 'React', icon: 'vscode-icons:file-type-reactjs', color: '#00D8FF' },
    ],
  },
  {
    href: '/certificates/AWS_Udemy.pdf',
    title: 'AWS Serverless APIs & Apps',
    subtitle: '🎓 Udemy',
    concluded: '02/2025',
    badges: [
      { title: 'AWS', icon: 'logos:aws', color: '#F90' },
      { title: 'API Gateway', icon: 'logos:aws-api-gateway', color: '#FF4F8B' },
      { title: 'Lambda', icon: 'logos:aws-lambda', color: '#F90' },
      { title: 'DynamoDB', icon: 'logos:aws-dynamodb', color: '#527FFF' },
      { title: 'Cognito', icon: 'logos:aws-cognito', color: '#FF5252' },
      { title: 'Route 53', icon: 'logos:aws-route53', color: '#A166FF' },
      { title: 'Cloudfront', icon: 'logos:aws-cloudfront', color: '#A166FF' },
    ],
  },
  {
    href: '/certificates/Docker_Kubernetes_Udemy.pdf',
    title: 'Docker & Kubernetes: The Practical Guide [2025 Edition]',
    subtitle: '🎓 Udemy',
    concluded: '02/2025',
    badges: [
      { title: 'Docker', icon: 'vscode-icons:file-type-docker', color: '#039CC7' },
      { title: 'Kubernetes', icon: 'logos:kubernetes', color: '#326DE6' },
    ],
  },
])
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="inline border-b-2 border-[#F28AA9] text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
      {{ t('certificates.title') }}
    </h1>
    <List v-for="{href, title, subtitle, concluded, badges} in certificates" :key="href" :title :badges :urls="[{ url: href, icon: 'iconoir:doc-star-in', external: true, aria: 'PDF' }]" :description="`${subtitle} • ${concluded}`" />
  </div>
</template>
