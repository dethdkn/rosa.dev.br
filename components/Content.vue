<script setup lang="ts">
const { content } = defineProps({
	content: {
		type: Object as () => {
			img?: {
				href?: string
				img: string
				alt: string
				title?: string
				subtitle?: string
				anotherTitle?: string
			}
			video?: {
				url: string
				title: string
			}
		},
		required: true,
	},
})
</script>

<template>
	<a
		v-if="content.img && content.img.href"
		:href="content.img.href"
		target="_blank"
		class="relative cursor-pointer group"
	>
		<img :src="content.img.img" :alt="content.img.alt" class="rounded-2xl w-64 h-[12.25rem] m-5">
		<figcaption
			v-if="content.img.title || content.img.subtitle || content.img.anotherTitle"
			class="absolute top-0 left-0 rounded-2xl w-64 h-[12.25rem] m-5 text-center bg-black bg-opacity-70 text-white py-2 hidden group-hover:block"
		>
			<h3 v-if="content.img.title" class="mt-10 font-bold text-xl">
				{{ content.img.title }}
			</h3>
			<h4 v-if="content.img.subtitle" class="font-semibold text-lg">
				{{ content.img.subtitle }}
			</h4>
			<p v-if="content.img.anotherTitle" class="font-semibold text-base">
				{{ content.img.anotherTitle }}
			</p>
		</figcaption>
	</a>
	<div v-else-if="content.img && content.img.img" class="relative">
		<img
			:src="content.img.img"
			:alt="content.img.alt"
			class="rounded-2xl w-64 h-[12.25rem] m-5 cursor-cell"
		>
	</div>
	<div v-else-if="content.video" class="relative">
		<iframe
			class="rounded-2xl w-64 h-[12.25rem] m-5"
			:src="content.video.url"
			:title="content.video.title"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</template>
