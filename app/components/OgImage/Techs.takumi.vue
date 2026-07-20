<script setup lang="ts">
  defineProps({
    title: { type: String, default: 'Gabriel Rosa' },
    description: { type: String, default: '' },
  })
</script>

<template>
  <div class="h-full w-full bg-onyx">
    <h1
      class="absolute top-[10%] left-1/2 [transform:translate(-50%,-50%)] border-b-2 border-candy text-[60px] text-snow">
      {{ title }}
    </h1>

    <img
      src="https://rosa.dev.br/stack/vue.png"
      alt="VueJS"
      class="absolute top-[10%] left-[2%] h-25 w-25 [transform:translate(-50%,-50%)_rotate(30deg)]" />

    <img
      src="https://rosa.dev.br/stack/nuxt.png"
      alt="NuxtJS"
      class="absolute top-[10%] right-[4%] h-25 w-25 [transform:translate(-50%,-50%)_rotate(-30deg)]" />

    <img
      src="https://rosa.dev.br/stack/tailwind.png"
      alt="TailwindCSS"
      class="absolute top-[65%] right-[20%] h-25 w-25 [transform:translate(-50%,-50%)]" />

    <img
      src="https://rosa.dev.br/stack/typescript.png"
      alt="Typescript"
      class="absolute top-[85%] left-[6%] h-25 w-25 [transform:translate(-50%,-50%)_rotate(10deg)]" />

    <img
      src="https://rosa.dev.br/stack/mongo.png"
      alt="MongoDB"
      class="absolute top-[75%] right-[6%] h-25 w-25 [transform:translate(-50%,-50%)_rotate(-10deg)]" />

    <img
      src="https://rosa.dev.br/stack/nginx.png"
      alt="Nginx"
      class="absolute top-[75%] right-[50%] h-25 w-25 [transform:translate(-50%,-50%)_rotate(-5deg)]" />

    <div class="flex h-full w-full items-center justify-center">
      <div class="ms-6">
        <h2 class="p-15 text-[40px] text-snow">
          {{ description }}
        </h2>
      </div>
    </div>
  </div>
</template>
