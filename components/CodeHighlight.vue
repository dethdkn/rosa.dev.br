<script setup lang='ts'>
const { fileName, code, lang } = defineProps({
	fileName: {
		type: String,
		required: true,
	},
	code: {
		type: String,
		required: true,
	},
	lang: String,
})
</script>

<template>
	<div class="bg-[#FFFFFF] dark:bg-[#0D1117] border border-[#DCE0E7] dark:border-[#1E1E2E] rounded-2xl p-5 relative">
		<span class="absolute top-0 left-0 px-3 font-sans rounded bg-zinc-100 dark:bg-zinc-900">{{ fileName }}</span>
		<ClientOnly>
			<highlightjs :autodetect="false" :language="lang ? lang : 'typescript'" :code="code" />
			<template #fallback>
				<pre>
                    <code>
                        {{ code }}
                    </code>
                </pre>
			</template>
		</ClientOnly>
	</div>
</template>
