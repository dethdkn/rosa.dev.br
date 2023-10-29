<script setup lang="ts">
import {computed} from 'vue'

defineOptions({
	inheritAttrs: false
})
defineProps({
	title: String,
	description: {
		type: String,
		default: 'Check Out!'
	}
})

const backgroundAttrs = computed(() => {
	return {
		style: {
			display: 'flex',
			position: 'absolute',
			width: '100%',
			height: '100%',
			background: 'rgba(5, 5, 5,1)'
		}
	}
})

const backgroundFlareAttrs = computed(() => {
	return {
		style: {
			display: 'flex',
			position: 'absolute',
			right: '-100%',
			top: '10%',
			width: '200%',
			height: '200%',
			backgroundImage:
				'radial-gradient(circle, rgba(58,189,248, 0.5) 0%,  rgba(5, 5, 5,0.3) 50%, rgba(5, 5, 5,0) 70%)'
		}
	}
})

const containerAttrs = computed(() => {
	const classes = [
		'w-full',
		'h-full',
		'flex',
		'text-gray-100',
		'relative',
		'items-center',
		'justify-center'
	]
	const styles: Record<string, any> = {
		padding: '0 100px'
	}
	return {class: classes, style: styles}
})

const titleAttrs = computed(() => {
	const classes = []
	const styles = {
		fontWeight: 'bold',
		marginBottom: '50px',
		fontSize: '75px'
	}
	return {class: classes, style: styles}
})

const descriptionAttrs = computed(() => {
	const classes = []
	const styles = {
		fontSize: '35px',
		lineHeight: `${35 * 1.5}px`,
		opacity: '0.8'
	}
	return {class: classes, style: styles}
})
</script>
<template>
	<div v-bind="backgroundAttrs" />
	<div v-bind="backgroundFlareAttrs" />
	<div v-bind="containerAttrs">
		<div class="flex flex-row justify-between items-center" style="margin-bottom: 100px">
			<div class="flex flex-col w-full">
				<div v-bind="titleAttrs">
					{{ title }}
				</div>
				<div v-bind="descriptionAttrs">
					{{ description }}
				</div>
			</div>
		</div>
		<div class="flex flex-row absolute bottom-10 text-left items-start">
			<div style="font-size: 25px" class="font-bold">Gabriel Rosa</div>
		</div>
	</div>
</template>
