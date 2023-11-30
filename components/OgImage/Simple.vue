<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
})

const { title, description } = defineProps({
	title: String,
	description: String,
})
</script>

<template>
	<div class="w-full h-full bg-[#1E1E2E]">
		<h1 class="underline-text">
			{{ title }}
		</h1>
		<div class="w-full h-full flex items-center justify-center">
			<div class="ms-6">
				<h2>{{ description }}</h2>
			</div>
		</div>
	</div>
</template>

<style scoped>
h1 {
    font-size: 60px;
    color: #CDD5F4;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
}
h2 {
    font-size: 40px;
    color: #CDD5F4;
    padding: 60px;
}
.underline-text {
    border-bottom: 2px solid #F28AA9;
}
</style>
