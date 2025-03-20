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
      <DialogOverlay class="fixed inset-0 z-100 bg-gray-950/30 data-[state=open]:animate-overlayShow" />
      <DialogContent class="fixed left-2/4 top-2/4 z-100 w-19/20 -translate-x-2/4 -translate-y-2/4 focus:outline-none data-[state=open]:animate-contentShow md:w-950px">
        <VisuallyHidden as-child>
          <DialogTitle>
            {{ title }}
          </DialogTitle>
        </VisuallyHidden>
        <VisuallyHidden as-child>
          <DialogDescription>
            {{ description }}
          </DialogDescription>
        </VisuallyHidden>
        <slot />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
