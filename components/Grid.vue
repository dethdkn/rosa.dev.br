<script setup lang="ts">
const { contents } = defineProps({
	contents: {
		type: Array as () => {
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
		}[],
	},
})
</script>

<template>
	<div class="grid place-items-center">
		<span>
			<div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
				<Content v-for="(content, i) in contents" :key="content.img && content.img.href ? content.img.href : content.video && content.video.url ? content.video.url : i" :content="content" />
			</div>
		</span>
	</div>
</template>
