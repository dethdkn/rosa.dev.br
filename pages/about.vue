<script setup lang='ts'>
const { t } = useI18n()

useHead({
	title: t('about.title'),
})

useSeoMeta({
	description: t('about.description'),
})

defineOgImage({
	component: 'Simple',
	title: t('about.title'),
})

const selected = ref({ img: '', alt: '', hidden: true })

function openPopup(img: { url: string, alt: string }) {
	selected.value = { img: img.url, alt: img.alt, hidden: false }
}

function closePopup(e: Event) {
	const target = e.target as HTMLImageElement
	if (target.id !== 'popup-img')
		selected.value = { img: '', alt: '', hidden: true }
}

watch(selected, (nv) => {
	if (process.client) {
		if (nv.hidden)
			return document.body.style.overflow = 'visible'
		return document.body.style.overflow = 'hidden'
	}
})
</script>

<template>
	<div>
		<div class="px-20 py-5 space-y-10 lg:space-y-20">
			<div class="border-b border-gray-300 dark:border-gray-700 pb-10 text-center sm:text-start">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
					{{ t('about.title') }}
				</p>
				<p class="text-center text-[#4C4F69] dark:text-[#CDD5F4] text-xl block mt-8 lg:px-20">
					{{ t('about.learner') }}
				</p>
			</div>
			<div class="border-b border-gray-300 dark:border-gray-700 pb-10 text-center sm:text-start">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
					{{ t('about.experience') }}
				</p>
				<div class="flex justify-center items-center space-x-20 mt-8 lg:px-20">
					<ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
						<li class="mb-4 ms-6">
							<span class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 bg-[#F28AA9]">
								<Icon name="iconoir:graduation-cap" size="1.5rem" class="text-[#EFF1F5] dark:text-[#1E1E2E]" />
							</span>
							<h3 class=" text-lg font-medium leading-tight mb-2">
								{{ t('about.unicarioca') }}
							</h3>
							<p class="text-sm border border-[#F28AA9] inline p-1 m-0 sm:m-1 rounded whitespace-nowrap">
								{{ t('about.twnt') }}
							</p>
							<p class="mt-2">
								{{ t('about.cs') }}
							</p>
						</li>
					</ol>
					<ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
						<li class="mb-4 ms-6">
							<span class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 bg-[#F28AA9]">
								<Icon name="iconoir:code" size="1.5rem" class="text-[#EFF1F5] dark:text-[#1E1E2E]" />
							</span>
							<h3 class=" text-lg font-medium leading-tight mb-2">
								{{ t('about.cbpf') }}
							</h3>
							<p class="text-sm border border-[#F28AA9] inline p-1 m-0 sm:m-1 rounded whitespace-nowrap">
								{{ t('about.twnt') }}
							</p>
							<p class="mt-2">
								{{ t('about.full_stack') }}
							</p>
						</li>
					</ol>
				</div>
			</div>
			<div class="border-b border-gray-300 dark:border-gray-700 pb-10 text-center sm:text-start">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
					{{ t('about.pictures') }}
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grod-cols-3 lg:grid-cols-4 place-items-center">
					<div v-for="img in imgs" :key="img.url" class="cursor-zoom-in m-5" @click="openPopup(img)">
						<div class="w-64 rounded-2xl overflow-hidden">
							<NuxtImg
								:src="img.url"
								:alt="img.alt"
								class="w-full object-cover transition-all hover:scale-110"
								placeholder
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="border-b border-gray-300 dark:border-gray-700 pb-10 text-center sm:text-start">
				<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
					{{ t('about.stack') }}
				</p>
				<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 place-items-center pt-8">
					<NuxtLink v-for="stack in stacks" :key="stack.title" :to="stack.url" external target="_blank">
						<NuxtImg :src="stack.imgurl" :alt="`${stack.title} Logo`" class="w-24 hover:cursor-pointer transition-all duration-300" :class="stack.class" :title="stack.title" placeholder loading="lazy" />
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="fixed top-0 left-0 bg-gray-950 bg-opacity-30 w-full h-full z-[100] transition-all" :class="{ hidden: selected.hidden }" @click="closePopup">
			<Icon v-if="!selected.hidden" name="iconoir:xmark-circle" size="30" class="absolute top-3 right-3 cursor-pointer z-[101] text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9]" />
			<img id="popup-img" :src="selected.img" :alt="selected.alt" class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rounded-2xl border-[3px] border-solid object-cover w-[95%] md:w-[950px] cursor-cell border-[#F28AA9]">
		</div>
	</div>
</template>

<style scoped lang="sass">
.vue:hover
	filter: drop-shadow(0 0 2em #41B883aa)
.nuxt:hover
	filter: drop-shadow(0 0 2em #43DD7Daa)
.typescript:hover
	filter: drop-shadow(0 0 2em #0086D6aa)
.tailwind:hover
	filter: drop-shadow(0 0 2em #00BADAaa)
.mongo:hover
	filter: drop-shadow(0 0 2em #00AC34aa)
.nginx:hover
	filter: drop-shadow(0 0 2em #00972Caa)
</style>
