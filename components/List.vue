<script setup lang='ts'>
const { title, titleKey, badges, urls, description, descriptionKey } = defineProps({
	title: String,
	titleKey: String,
	badges: {
		type: Array as () => { title: string, icon: string, color: string }[],
		required: true,
	},
	urls: {
		type: Array as () => { url: string, external: boolean, icon: string }[],
		required: true,
	},
	description: String,
	descriptionKey: String,
})

const { t } = useI18n()

const localePath = useLocalePath()
</script>

<template>
	<div class="flex justify-center items-center sm:justify-start sm:items-start flex-col mt-8 border-b border-gray-300 dark:border-gray-700 pb-5 space-y-4">
		<div class="space-x-3 flex flex-col justify-center items-center sm:block">
			<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-2xl border-b-2 border-[#4C4F69] dark:border-[#CDD5F4] inline">
				{{ titleKey ? t(titleKey) : title }}
			</p>
			<Badge v-for="badge in badges" :key="badge.title" :title="badge.title" :icon="badge.icon" :color="badge.color" />
		</div>
		<div class="flex justify-start items-center space-x-4">
			<NuxtLink v-for="url in urls" :key="url.url" :to="url.url === '/' ? localePath('/') : url.url" :external="url.external" :target="url.url === '/' ? '_self' : '_blank'" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9] text-3xl">
				<Icon :name="url.icon" />
			</NuxtLink>
		</div>
		<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-xl inline">
			{{ descriptionKey ? t(descriptionKey) : description }}
		</p>
	</div>
</template>
