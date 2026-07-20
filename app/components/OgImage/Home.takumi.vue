<script setup lang="ts">
  defineProps({
    title: { type: String, default: 'Gabriel Rosa' },
    subtitle: { type: String, default: 'Software Engineer & DevOps' },
    im: { type: String, default: "I'm" },
    aka: { type: String, default: 'aka' },
  })
</script>

<template>
  <div class="h-full w-full bg-onyx">
    <h1
      class="absolute top-[10%] left-1/2 [transform:translate(-50%,-50%)] border-b-2 border-candy text-[60px] text-snow">
      {{ title }}
    </h1>
    <div class="flex h-full w-full items-center justify-center">
      <img
        src="/gsr.png"
        alt="Gabriel Rosa"
        class="mr-7.5 h-52 w-52 rounded-full border-2 border-candy" />
      <div class="ms-6 flex flex-col items-center">
        <h2 class="text-[40px] text-snow">
          <span class="mr-2.5">{{ im }}&nbsp;</span>
          <span class="mr-2.5 border-b-2 border-candy">Gabriel Rosa&nbsp;</span>
          <span class="mr-2.5">{{ aka }}&nbsp;</span>
          <span class="border-b-2 border-candy">Deth</span>
        </h2>
        <h3 class="text-[20px] text-snow">
          {{ subtitle }}
        </h3>
      </div>
    </div>
  </div>
</template>
