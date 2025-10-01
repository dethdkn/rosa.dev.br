<script setup lang='ts'>
const error = useError()
const localePath = useLocalePath()

const statusCode = ref(500)
const message = ref('Something went wrong...')

if(error.value && 'statusCode' in error.value && 'message' in error.value){
  statusCode.value = error.value.statusCode
  message.value = error.value.message
}

useHead({ title: String(statusCode.value) })
</script>

<template>
  <NuxtLayout>
    <div class="min-h-content flex items-center justify-center">
      <div class="space-y-10 text-center">
        <h1 class="border-candy text-obsidian dark:text-snow inline border-b-2 text-8xl">
          {{ statusCode }}
        </h1>
        <h1 class="text-obsidian dark:text-snow text-xl">
          {{ message }}
        </h1>
        <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
        <button class="bg-candy hover:bg-bubblegum gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-white shadow-sm" @click="clearError({ redirect: localePath('/') })">
          Home
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
