<script setup lang='ts'>
defineProps({ fileName: { type: String, required: true } })
</script>

<template>
  <div class="relative rounded-2xl border border-cloud bg-milk p-5 dark:border-onyx dark:bg-eclipse">
    <div class="overflow-auto px-3 py-6">
      <span class="absolute left-0 top-0 rounded bg-zinc-100 px-3 font-sans dark:bg-zinc-900">{{ fileName }}</span>
      <div class="mt-2">
        <slot />
      </div>
    </div>
  </div>
</template>
