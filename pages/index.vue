<script setup lang="ts">
const { t } = useI18n()

defineOgImage({
	title: 'Gabriel Rosa',
	component: 'Og',
})
useSeoMeta({
	description: `${t('home.subtitle1')} | ${t('home.subtitle2')} | ${t('home.subtitle3')}`,
})

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() => Math.sqrt(dx.value * dx.value + dy.value * dy.value))
const size = computed(() => Math.max(300 - distance.value / 3, 150))
const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1))
const logo = ref<HTMLElement>()
const logoGradient = computed(() => {
	const rect = logo.value?.getBoundingClientRect()
	const xPos = x.value - (rect?.left ?? 0)
	const yPos = y.value - (rect?.top ?? 0)
	return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`
})

const typeValue = ref('')
const typeStatus = ref(false)
const typeArray = ref([t('home.subtitle1'), t('home.subtitle2'), t('home.subtitle3')])
const typingSpeed = 100
const erasingSpeed = 100
const newTextDelay = 500
let typeArrayIndex = 0
let charIndex = 0
function typeText() {
	if (charIndex < typeArray.value[typeArrayIndex].length) {
		if (!typeStatus.value)
			typeStatus.value = true
		typeValue.value += typeArray.value[typeArrayIndex].charAt(charIndex)
		charIndex += 1
		setTimeout(typeText, typingSpeed)
	}
	else {
		typeStatus.value = false
		setTimeout(eraseText, newTextDelay)
	}
}
function eraseText() {
	if (charIndex > 0) {
		if (!typeStatus.value)
			typeStatus.value = true
		typeValue.value = typeArray.value[typeArrayIndex].substring(0, charIndex - 1)
		charIndex -= 1
		setTimeout(eraseText, erasingSpeed)
	}
	else {
		typeStatus.value = false
		typeArrayIndex += 1
		if (typeArrayIndex >= typeArray.value.length)
			typeArrayIndex = 0
		setTimeout(() => {
			typeText()
		}, typingSpeed + 1000)
	}
}

onMounted(() => {
	setTimeout(() => {
		typeText()
	}, newTextDelay + 200)
})

watchEffect(() => {
	typeArray.value = [t('home.subtitle1'), t('home.subtitle2'), t('home.subtitle3')]
})
</script>

<template>
	<Section class="cursor-none overflow-hidden">
		<div
			class="absolute bg-cyan-400/50 dark:bg-sky-600/30 rounded-full -translate-x-[75%] -translate-y-1/2 blur-2xl dark:blur-3xl"
			:style="{ left: `${x}px`, top: `${y}px`, width: `${size}px`, height: `${size}px`, opacity }"
		/>
		<h2
			ref="logo"
			class="font-bold text-center text-5xl dark:text-white transition-500"
			:style="{ maskImage: logoGradient }"
		>
			<p>{{ t('home.title') }}</p>
			<span class="inline-block mr-[-15px]">{{ typeValue }}&nbsp;</span>
			<span class="cursor inline-block">|</span>
			<span class="hidden">{{ t('home.subtitle1') }} {{ t('home.subtitle2') }} {{ t('home.subtitle3') }}</span>
		</h2>
	</Section>
</template>

<style scoped lang="sass">
span.cursor
    animation: blink 800ms infinite
@keyframes blink
    0%
        opacity: 1
    50%
        opacity: 0
    100%
        opacity: 1
</style>
