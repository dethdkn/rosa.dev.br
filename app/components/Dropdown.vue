<script setup lang='ts'>
defineProps({
  options: { type: Array as PropType<{ text: string, icon: string, click: ()=> void, active: boolean }[]>, required: true },
  iconSize: { type: Number, default: 10 },
})

const state = ref(false)
</script>

<template>
  <DropdownMenuRoot v-model:open="state">
    <DropdownMenuTrigger class="flex items-center justify-center">
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent class="min-w-36 rounded-md bg-gray-200 p-[5px] outline-none will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade dark:bg-gray-800" :side-offset="5">
        <DropdownMenuItem v-for="{text, icon, click, active} in options" :key="text" :value="text" :disabled="active" class="relative flex h-6 cursor-pointer select-none items-center space-x-2 rounded-[5px] px-1 text-xs leading-none text-obsidian outline-none data-[disabled]:cursor-not-allowed data-[highlighted]:bg-candy data-[disabled]:opacity-70 dark:text-snow" @click="click">
          <Icon :name="icon" :size="iconSize" />
          <span>{{ text }}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
