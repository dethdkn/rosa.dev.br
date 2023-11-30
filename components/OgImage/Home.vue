<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
})

const { title, subtitle, im, aka } = defineProps({
	title: String,
	subtitle: String,
	im: String,
	aka: String,
})
</script>

<template>
	<div class="w-full h-full bg-[#1E1E2E]">
		<h1 class="underline-text">
			{{ title }}
		</h1>
		<div class="w-full h-full flex items-center justify-center">
			<img src="/gsr.png" alt="Gabriel Rosa" class="rounded-full w-52" style="border: 2px  solid #F28AA9;">
			<div class="ms-6">
				<h2>{{ im }} <span class="underline-text">Gabriel Rosa</span> {{ aka }} <span class="underline-text">Deth</span></h2>
				<h3>{{ subtitle }}</h3>
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
}
h3 {
    font-size: 20px;
    color: #CDD5F4;
}
.underline-text {
    border-bottom: 2px solid #F28AA9;
}
</style>
