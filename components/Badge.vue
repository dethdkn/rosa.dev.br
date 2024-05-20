<script setup lang='ts'>
const { title, icon, color } = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
})
</script>

<template>
  <div class="inline rounded border p-1 text-[10px] mt-2 sm:mt-0" :style="{ color, 'border-color': color }">
    <span class="inline-flex justify-center items-center space-x-1">
      <Icon :name="icon" :size="10" />
      <span>{{ title }}</span>
    </span>
  </div>
</template>
