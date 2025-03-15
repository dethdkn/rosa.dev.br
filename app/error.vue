<script setup lang='ts'>
const error = useError()
const localePath = useLocalePath()

const statusCode = ref(500)
const message = ref('Something went wrong...')

if(error.value && 'statusCode' in error.value && 'message' in error.value){
  statusCode.value = error.value.statusCode
  message.value = error.value.message
}

useHead({ title: `${statusCode.value}` })
</script>

<template>
  <NuxtLayout>
    <div class="flex min-h-content items-center justify-center">
      <div class="space-y-10 text-center">
        <h1 class="inline border-b-2 border-candy text-8xl text-obsidian dark:text-snow">
          {{ statusCode }}
        </h1>
        <h1 class="text-xl text-obsidian dark:text-snow">
          {{ message }}
        </h1>
        <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
        <button class="gap-x-1.5 rounded-md bg-candy px-2.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-bubblegum" @click="clearError({ redirect: localePath('/') })">
          Home
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
