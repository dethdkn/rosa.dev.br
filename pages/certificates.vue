<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.certificates')}`
})

const certificates = ref([
	{
		img: {
			href: '/certificados/Informatica_Empresarial_Says.pdf',
			img: '/says.png',
			alt: 'Says Logo',
			title: 'Informática Empresarial',
			subtitle: 'Says Centro de Ensino',
			anotherTitle: '10/2013'
		}
	},
	{
		img: {
			href: '/certificados/English_High_Advanced_Says.pdf',
			img: '/says.png',
			alt: 'Says Logo',
			title: 'English - High Advanced',
			subtitle: 'Says Centro de Ensino',
			anotherTitle: '07/2019'
		}
	},
	{
		img: {
			href: '/certificados/English_Especialization_Says.pdf',
			img: '/says.png',
			alt: 'Says Logo',
			title: 'English - Specialization Course',
			subtitle: 'Says Centro de Ensino',
			anotherTitle: '07/2019'
		}
	},
	{
		img: {
			href: '/certificados/Algoritmo0_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 00: PRIMEIROS PASSOS',
			subtitle: 'Estudonauta',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Algoritmo1_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 01: PRIMEIROS COMANDOS',
			subtitle: 'Estudonauta',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Linux0_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINUX - MÓDULO 00: PRIMEIROS PASSOS',
			subtitle: 'Estudonauta',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Linux1_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINUX - MÓDULO 01: INTERFACE E TERMINAL',
			subtitle: 'Estudonauta',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Linux2_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINUX - MÓDULO 02: PACOTES E GESTÃO DE PROCESSOS',
			subtitle: 'Estudonauta',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Linux3_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINUX - MÓDULO 03: PROGRAMAÇÃO COM LINUX',
			subtitle: 'Estudonauta',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Linux4_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINUX - MÓDULO 04: TERMINAL AVANÇADO',
			subtitle: 'Estudonauta',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Linux5_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINUX - MÓDULO 05: DISCOS E RAID',
			subtitle: 'Estudonauta',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Linux_Curso_em_Video.pdf',
			img: '/cursoemvideo.png',
			alt: 'Curso em Vídeo Logo',
			title: 'LINUX',
			subtitle: 'Curso em Vídeo',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Algoritmo_Curso_em_Video.pdf',
			img: '/cursoemvideo.png',
			alt: 'Curso em Vídeo Logo',
			title: 'ALGORITMO',
			subtitle: 'Curso em Vídeo',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Hardware_Curso_em_Video.pdf',
			img: '/cursoemvideo.png',
			alt: 'Curso em Vídeo Logo',
			title: 'HARDWARE',
			subtitle: 'Curso em Vídeo',
			anotherTitle: '08/2021'
		}
	},
	{
		img: {
			href: '/certificados/Algoritmo2_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 02: CONDICIONAIS',
			subtitle: 'Estudonauta',
			anotherTitle: '09/2021'
		}
	},
	{
		img: {
			href: '/certificados/Algoritmo3_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 03: REPETIÇÕES',
			subtitle: 'Estudonauta',
			anotherTitle: '09/2021'
		}
	},
	{
		img: {
			href: '/certificados/Algoritmo4_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 04: VARIÁVEIS COMPOSTAS',
			subtitle: 'Estudonauta',
			anotherTitle: '09/2021'
		}
	},
	{
		img: {
			href: '/certificados/Algoritmo5_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'PROGRAMAÇÃO BÁSICA - MÓDULO 05: ROTINAS',
			subtitle: 'Estudonauta',
			anotherTitle: '09/2021'
		}
	},
	{
		img: {
			href: '/certificados/C0_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINGUAGEM C - MÓDULO 00: PRIMEIROS PASSOS',
			subtitle: 'Estudonauta',
			anotherTitle: '09/2021'
		}
	},
	{
		img: {
			href: '/certificados/C1_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINGUAGEM C - MÓDULO 01: ESTRUTURAS BÁSICAS',
			subtitle: 'Estudonauta',
			anotherTitle: '09/2021'
		}
	},
	{
		img: {
			href: '/certificados/C2_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINGUAGEM C - MÓDULO 02: OPERADORES',
			subtitle: 'Estudonauta',
			anotherTitle: '09/2021'
		}
	},
	{
		img: {
			href: '/certificados/C3_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'LINGUAGEM C - MÓDULO 03: ESTRUTURAS DE CONTROLE (CONDIÇÕES)',
			subtitle: 'Estudonauta',
			anotherTitle: '09/2021'
		}
	},
	{
		img: {
			href: '/certificados/Redes0_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'REDES DE COMPUTADORES - MÓDULO 00: FUNDAMENTOS DE REDE',
			subtitle: 'Estudonauta',
			anotherTitle: '11/2021'
		}
	},
	{
		img: {
			href: '/certificados/Web1_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 1 DE 5',
			subtitle: 'Estudonauta',
			anotherTitle: '07/2022'
		}
	},
	{
		img: {
			href: '/certificados/Web2_Estudonauta.pdf',
			img: '/estudonauta.png',
			alt: 'Estudonauta Logo',
			title: 'DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 2 DE 5',
			subtitle: 'Estudonauta',
			anotherTitle: '07/2022'
		}
	},
	{
		img: {
			href: '/certificados/Windows_Prompt_Comando_Alura.pdf',
			img: '/alura.png',
			alt: 'Alura Logo',
			title: 'Windows Prompt: Trabalhando na linha de comando',
			subtitle: 'Alura',
			anotherTitle: '08/2022'
		}
	},
	{
		img: {
			href: '/certificados/Linux1_Alura.pdf',
			img: '/alura.png',
			alt: 'Alura Logo',
			title: 'Linux I: conhecendo e utilizando o terminal',
			subtitle: 'Alura',
			anotherTitle: '08/2022'
		}
	},
	{
		img: {
			href: '/certificados/Tecnologia_de_Redes_WTR.pdf',
			img: '/wtr.png',
			alt: 'WTR Logo',
			title: 'Workshop de Tecnologia de Redes do Ponto de Presença da RNP no Rio de Janeiro',
			subtitle: 'WTR',
			anotherTitle: '09/2022'
		}
	},
	{
		img: {
			href: '/certificados/Office365_Linkedin.pdf',
			img: '/linkedinlearning.png',
			alt: 'Linkedin Learning Logo',
			title: 'Descubra o Microsoft Office 365',
			subtitle: 'Linkedin Learning',
			anotherTitle: '09/2022'
		}
	},
	{
		img: {
			href: '/certificados/JavaScript0_Alura.pdf',
			img: '/alura.png',
			alt: 'Alura Logo',
			title: 'JavaScript: explorando a linguagem',
			subtitle: 'Alura',
			anotherTitle: '09/2022'
		}
	},
	{
		img: {
			href: '/certificados/Linux2_Alura.pdf',
			img: '/alura.png',
			alt: 'Alura Logo',
			title: 'Linux II: programas, processos e pacotes',
			subtitle: 'Alura',
			anotherTitle: '09/2022'
		}
	},
	{
		img: {
			href: '/certificados/Git_Linkedin.pdf',
			img: '/linkedinlearning.png',
			alt: 'Linkedin Learning Logo',
			title: 'Git e GitHub: Formação Básica',
			subtitle: 'Linkedin Learning',
			anotherTitle: '09/2022'
		}
	},
	{
		img: {
			href: '/certificados/NodeJS_MVC_RestAPI_GraphQL_Deno_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
			subtitle: 'Udemy',
			anotherTitle: '11/2022'
		}
	},
	{
		img: {
			href: '/certificados/Nginx_Apache_ssl_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'NGINX, Apache, SSL Encryption - Certification Course',
			subtitle: 'Udemy',
			anotherTitle: '11/2022'
		}
	},
	{
		img: {
			href: '/certificados/Git_Github_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'Git & GitHub - The Practical Guide',
			subtitle: 'Udemy',
			anotherTitle: '11/2022'
		}
	},
	{
		img: {
			href: '/certificados/Javascript_Jquery_VueJS_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'Complete Javascript & jQuery Course with Bonus VueJS Intro',
			subtitle: 'Udemy',
			anotherTitle: '12/2022'
		}
	},
	{
		img: {
			href: '/certificados/JavaScript_Beginner%2BAdvanced_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'JavaScript - The Complete Guide 2023 (Beginner + Advanced)',
			subtitle: 'Udemy',
			anotherTitle: '02/2023'
		}
	},
	{
		img: {
			href: '/certificados/SQL_MySQL%2BPostgreSQL_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: `SQL - The Complete Developer's Guide (Mysql, PostgreSQL)`,
			subtitle: 'Udemy',
			anotherTitle: '02/2023'
		}
	},
	{
		img: {
			href: '/certificados/MongoDB_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: `MongoDB - The Complete Developer's Guide 2023`,
			subtitle: 'Udemy',
			anotherTitle: '02/2023'
		}
	},
	{
		img: {
			href: '/certificados/MERN_Fullstack_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'React, NodeJS, Express & MongoDB - The MERN Fullstack Guide',
			subtitle: 'Udemy',
			anotherTitle: '02/2023'
		}
	},
	{
		img: {
			href: '/certificados/CSS_SASS_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)',
			subtitle: 'Udemy',
			anotherTitle: '04/2023'
		}
	},
	{
		img: {
			href: '/certificados/TypeScript_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'Understanding TypeScript',
			subtitle: 'Udemy',
			anotherTitle: '04/2023'
		}
	},
	{
		img: {
			href: '/certificados/VueJS_Router_CompositionAPI_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'Vue - The Complete Guide (incl. Router & Composition API)',
			subtitle: 'Udemy',
			anotherTitle: '04/2023'
		}
	},
	{
		img: {
			href: '/certificados/Nuxt3_Udemy.pdf',
			img: '/udemy.png',
			alt: 'Udemy Logo',
			title: 'The Nuxt 3 Bootcamp - The Complete Developer Guide',
			subtitle: 'Udemy',
			anotherTitle: '08/2023'
		}
	}
])
</script>
<template>
	<Section>
		<Grid :contents="certificates" />
	</Section>
</template>
