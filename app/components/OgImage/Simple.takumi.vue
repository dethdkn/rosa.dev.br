<script setup lang="ts">
  defineProps({
    title: { type: String, default: 'Gabriel Rosa' },
    description: { type: String, default: '' },
  })
</script>

<template>
  <div class="h-full w-full bg-onyx">
    <div class="flex w-full items-center justify-center">
      <h1 class="text-center text-[60px] text-snow">
        {{ title }}
      </h1>
    </div>
    <div class="flex w-full items-center justify-center">
      <div class="ms-6">
        <h2 class="p-15 text-[40px] text-snow">
          {{ description }}
        </h2>
      </div>
    </div>
  </div>
</template>
