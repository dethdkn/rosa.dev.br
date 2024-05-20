<script setup lang='ts'>
const error = useError()
const localePath = useLocalePath()

const statusCode = ref(500)
const message = ref('Something went wrong...')

if (error.value && 'statusCode' in error.value && 'message' in error.value) {
  statusCode.value = error.value.statusCode
  message.value = error.value.message
}

useHead({
  title: `${statusCode.value}`,
})
</script>

<template>
  <main class="h-screen bg-[#EFF1F5] dark:bg-[#1E1E2E]">
    <div class="flex h-screen items-center justify-center">
      <div class="space-y-10 text-center">
        <h1 class="inline border-b-2 border-[#F28AA9] text-8xl text-[#4C4F69] dark:text-[#CDD5F4]">
          {{ statusCode }}
        </h1>
        <h1 class="text-xl text-[#4C4F69] dark:text-[#CDD5F4]">
          {{ message }}
        </h1>
        <button class="gap-x-1.5 rounded-md bg-[#F28AA9] px-2.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-[#e7688e]" @click="clearError({ redirect: localePath('/') })">
          Home
        </button>
      </div>
    </div>
  </main>
</template>
