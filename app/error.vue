<script setup lang="ts">
  const props = defineProps({
    error: {
      type: Object,
      default() {
        return {
          status: 500,
          message: 'Server error',
        }
      },
    },
  })

  const localePath = useLocalePath()

  useHead({ title: String(props.error.status || 500) })
</script>

<template>
  <NuxtLayout>
    <div class="flex min-h-content items-center justify-center">
      <div class="space-y-10 text-center">
        <h1 class="inline border-b-2 border-candy text-8xl text-obsidian dark:text-snow">
          {{ error.status || 500 }}
        </h1>
        <h1 class="text-xl text-obsidian dark:text-snow">
          {{ error.message }}
        </h1>
        <button
          class="gap-x-1.5 rounded-md bg-candy px-2.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-bubblegum"
          @click="clearError({ redirect: localePath('/') })">
          Home
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
