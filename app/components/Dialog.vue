<script setup lang='ts'>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})

const open = defineModel<boolean>({ default: false })
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-100 bg-gray-950/30" />
      <DialogContent>
        <VisuallyHidden as-child>
          <DialogTitle>
            {{ title }}
          </DialogTitle>
          <DialogDescription>
            {{ description }}
          </DialogDescription>
        </VisuallyHidden>
        <slot />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
