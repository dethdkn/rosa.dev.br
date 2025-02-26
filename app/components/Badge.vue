<script setup lang='ts'>
defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-restricted-v-bind -->
  <div class="mt-2 inline rounded border p-1 text-[10px] sm:mt-0" :style="{ color, borderColor: color }">
    <span class="inline-flex items-center justify-center space-x-1">
      <Icon :name="icon" :size="10" />
      <span>{{ title }}</span>
    </span>
  </div>
</template>
