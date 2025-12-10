<script setup lang="ts">
const props = defineProps({
  fileName: { type: String, required: true },
  code: { type: String, required: true },
  lang: { type: String, required: true },
})

const html = ref('')

onNuxtReady(
  async () =>
    (html.value = await codeToHtml(props.code, {
      lang: props.lang,
      themes: { light: 'material-theme-lighter', dark: 'tokyo-night' },
    })),
)
</script>

<template>
  <div
    class="border-cloud bg-milk dark:border-onyx dark:bg-eclipse relative rounded-2xl border p-5">
    <div class="overflow-auto px-3 py-6">
      <span class="absolute top-0 left-0 rounded bg-zinc-100 px-3 font-sans dark:bg-zinc-900">{{
        fileName
      }}</span>
      <div class="mt-2">
        <ClientOnly>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="html" />
          <template #fallback>
            <pre><code>{{ code }}</code></pre>
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
