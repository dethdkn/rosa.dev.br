<script setup lang='ts'>
const { t } = useI18n()

const localePath = useLocalePath()

useHead({
	title: t('projects.title'),
})

useSeoMeta({
	description: t('projects.description'),
})

defineOgImage({
	component: 'Projects',
	title: t('projects.title'),
})
</script>

<template>
	<div class="px-20 py-5 space-y-10 lg:space-y-20">
		<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
			{{ t('projects.title') }}
		</p>
		<div class="flex justify-center items-center sm:justify-start sm:items-start flex-col mt-8 border-b border-gray-300 dark:border-gray-700 pb-5 space-y-4">
			<div class="space-x-3 flex flex-col justify-center items-center sm:block">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-2xl border-b-2 border-[#4C4F69] dark:border-[#CDD5F4] inline">
					Agenda de Auditórios
				</p>
				<Badge title="Vue.JS" icon="vscode-icons:file-type-vue" color="#41B883" />
				<Badge title="Nuxt.JS" icon="vscode-icons:file-type-nuxt" color="#2DDC82" />
				<Badge title="Nuxt UI" icon="vscode-icons:file-type-nuxt" color="#2DDC82" />
				<Badge title="TailwindCSS" icon="devicon:tailwindcss" color="#38BDF8" />
				<Badge title="LdapJS" icon="fxemoji:folder" color="#59C9FC" />
				<Badge title="Mongoose" icon="devicon:mongoose" color="#840000" />
			</div>
			<div class="flex justify-start items-center space-x-4">
				<NuxtLink to="https://auditorios.cbpf.br" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:open-new-window" />
				</NuxtLink>
				<NuxtLink to="https://youtu.be/14zR8I2AYcM" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:media-video" />
				</NuxtLink>
				<NuxtLink to="https://github.com/dethdkn/agenda-de-auditorios" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:github-circle" />
				</NuxtLink>
			</div>
			<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-xl inline">
				{{ t('projects.agenda_auditorios_description') }}
			</p>
		</div>
		<div class="flex justify-center items-center sm:justify-start sm:items-start flex-col mt-8 border-b border-gray-300 dark:border-gray-700 pb-5 space-y-4">
			<div class="space-x-3 flex flex-col justify-center items-center sm:block">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-2xl border-b-2 border-[#4C4F69] dark:border-[#CDD5F4] inline">
					ID CBPF
				</p>
				<Badge title="Vue.JS" icon="vscode-icons:file-type-vue" color="#41B883" />
				<Badge title="Nuxt.JS" icon="vscode-icons:file-type-nuxt" color="#2DDC82" />
				<Badge title="Nuxt UI" icon="vscode-icons:file-type-nuxt" color="#2DDC82" />
				<Badge title="TailwindCSS" icon="devicon:tailwindcss" color="#38BDF8" />
				<Badge title="LdapJS" icon="fxemoji:folder" color="#59C9FC" />
				<Badge title="Mongoose" icon="devicon:mongoose" color="#840000" />
			</div>
			<div class="flex justify-start items-center space-x-4">
				<NuxtLink to="https://youtu.be/Zq7PwGxcsLg" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:media-video" />
				</NuxtLink>
				<NuxtLink to="https://github.com/dethdkn/idcbpf" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:github-circle" />
				</NuxtLink>
			</div>
			<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-xl inline">
				{{ t('projects.idcbpf_description') }}
			</p>
		</div>
		<div class="flex justify-center items-center sm:justify-start sm:items-start flex-col mt-8 border-b border-gray-300 dark:border-gray-700 pb-5 space-y-4">
			<div class="space-x-3 flex flex-col justify-center items-center sm:block">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-2xl border-b-2 border-[#4C4F69] dark:border-[#CDD5F4] inline">
					Ldap-Sha512
				</p>
				<Badge title="NodeJS" icon="vscode-icons:file-type-node" color="#83CD29" />
				<Badge title="Typescript" icon="devicon:typescript" color="#137ACC" />
				<Badge title="Vitest" icon="devicon:vitest" color="#FCC72B" />
			</div>
			<div class="flex justify-start items-center space-x-4">
				<NuxtLink to="https://www.npmjs.com/package/ldap-sha512" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:npm" />
				</NuxtLink>
				<NuxtLink to="https://github.com/dethdkn/ldap-sha512" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:github-circle" />
				</NuxtLink>
			</div>
			<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-xl inline">
				{{ t('projects.ldapsha512_description') }}
			</p>
		</div>
		<div class="flex justify-center items-center sm:justify-start sm:items-start flex-col mt-8 border-b border-gray-300 dark:border-gray-700 pb-5 space-y-4">
			<div class="space-x-3 flex flex-col justify-center items-center sm:block">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-2xl border-b-2 border-[#4C4F69] dark:border-[#CDD5F4] inline">
					karinebarbosa.com
				</p>
				<Badge title="Bootstrap" icon="devicon:bootstrap" color="#8419FA" />
				<Badge title="Jquery" icon="devicon:jquery" color="#0E68AB" />
			</div>
			<div class="flex justify-start items-center space-x-4">
				<NuxtLink to="https://karinebarbosa.com" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:open-new-window" />
				</NuxtLink>
			</div>
			<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-xl inline">
				{{ t('projects.karine_description') }}
			</p>
		</div>
		<div class="flex justify-center items-center sm:justify-start sm:items-start flex-col mt-8 border-b border-gray-300 dark:border-gray-700 pb-5 space-y-4">
			<div class="space-x-3 flex flex-col justify-center items-center sm:block">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-2xl border-b-2 border-[#4C4F69] dark:border-[#CDD5F4] inline">
					rosa.dev.br
				</p>
				<Badge title="Vue.JS" icon="vscode-icons:file-type-vue" color="#41B883" />
				<Badge title="Nuxt.JS" icon="vscode-icons:file-type-nuxt" color="#2DDC82" />
				<Badge title="TailwindCSS" icon="devicon:tailwindcss" color="#38BDF8" />
			</div>
			<div class="flex justify-start items-center space-x-4">
				<NuxtLink :to="localePath('/')" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:open-new-window" />
				</NuxtLink>
				<NuxtLink to="https://github.com/dethdkn/rosa.dev.br" external target="_blank" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
					<Icon name="iconoir:github-circle" />
				</NuxtLink>
			</div>
			<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-xl inline">
				{{ t('projects.rosa_description') }}
			</p>
		</div>
	</div>
</template>
