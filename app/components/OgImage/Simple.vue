<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps({
  title: { type: String, default: 'Gabriel Rosa' },
  description: { type: String, default: '' },
})
</script>

<template>
  <!-- eslint-disable vue/no-restricted-static-attribute -->
  <div style="width: 100%; height: 100%; background-color: #1E1E2E;">
    <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
      <h1 style="font-size: 60px; color: #CDD5F4; text-align: center;">
        {{ title }}
      </h1>
    </div>
    <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
      <div style="margin-inline-start: 1.5rem">
        <h2 style="font-size: 40px; color: #CDD5F4; padding: 60px;">
          {{ description }}
        </h2>
      </div>
    </div>
  </div>
</template>
