<script setup lang="ts">
const { contents } = defineProps({
	contents: {
		type: Array as () => Content[],
	},
})

onMounted(async () => {
	if (process.client && contents) {
		let i = 0
		while (i < contents.length) {
			const doc = document.getElementById(`content-${i}`)
			await new Promise<void>((resolve) => {
				doc?.classList.remove('invisible')
				i = i + 1
				doc?.classList.add('animate__animated', 'animate__zoomIn')
				setTimeout(() => doc?.classList.remove('animate__animated', 'animate__zoomIn'), 200)
				setTimeout(() => resolve(), 200)
			})
		}
	}
})

const selected = ref({ img: '', alt: '', hidden: true })
function openPopup(content: Content) {
	if (content.img && content.img.img && !content.img?.href)
		selected.value = { img: content.img.img, alt: content.img.alt, hidden: false }
}
function closePopup(e: Event) {
	const target = e.target as HTMLImageElement
	if (target.id !== 'popup-img')
		selected.value = { img: '', alt: '', hidden: true }
}
</script>

<template>
	<div>
		<div class="grid place-items-center">
			<span>
				<div class="grid grid-cols-1 lg:grid-cols-3 place-items-center">
					<Content v-for="(content, i) in contents" :id="`content-${i}`" :key="content.img && content.img.href ? content.img.href : content.video && content.video.url ? content.video.url : i" :content="content" class="invisible" @click="openPopup(content)" />
				</div>
			</span>
		</div>
		<div class="fixed top-0 left-0 bg-gray-950 bg-opacity-30 w-full h-full z-[100] transition-all" :class="{ hidden: selected.hidden }" @click="closePopup">
			<Icon v-if="!selected.hidden" name="line-md:close-small" size="30" color="white" class="absolute top-3 right-3 cursor-pointer z-[101]" />
			<img id="popup-img" :src="selected.img" :alt="selected.alt" class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rounded-2xl border-[3px] border-solid border-gray-400 object-cover w-[95%] md:w-[750px] cursor-cell">
		</div>
	</div>
</template>
