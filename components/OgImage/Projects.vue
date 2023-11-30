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
		<img src="/stack/vue.png" alt="VueJS" class="vue">
		<img src="/stack/nuxt.png" alt="NuxtJS" class="nuxt">
		<img src="/stack/tailwind.png" alt="TailwindCSS" class="tailwind">
		<img src="/stack/typescript.webp" alt="Typescript" class="typescript">
		<img src="/stack/mongo.png" alt="MongoDB" class="mongo">
		<img src="/stack/nginx.png" alt="Nginx" class="nginx">
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
.vue {
    position: absolute;
    left: 2%;
    top: 10%;
    transform: translate(-50%, -50%);
    transform: rotate(30deg);
    width: 100px;
}
.nuxt {
    position: absolute;
    right: 4%;
    top: 10%;
    transform: translate(-50%, -50%);
    transform: rotate(-30deg);
    width: 100px;
}
.tailwind {
    position: absolute;
    right: 20%;
    top: 65%;
    transform: translate(-50%, -50%);
    width: 100px;
}
.typescript {
    position: absolute;
    left: 6%;
    top: 85%;
    transform: translate(-50%, -50%);
    transform: rotate(10deg);
    width: 100px;
}
.mongo {
    position: absolute;
    right: 6%;
    top: 75%;
    transform: translate(-50%, -50%);
    transform: rotate(-10deg);
    width: 100px;
}
.nginx {
    position: absolute;
    right: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    transform: rotate(-5deg);
    width: 100px;
}
</style>
