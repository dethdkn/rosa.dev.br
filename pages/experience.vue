<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.experience')}`
})
</script>
<template>
	<Section>
		<Card class="md:flex">
			<div class="mr-6">
				<Progress
					:title="t('experience.academic')"
					:location="t('experience.unicarioca')"
					:year="t('experience.2019')"
					:subtitle="t('experience.cs')"
				/>
			</div>
			<div class="mt-8 md:mt-0">
				<Progress
					:title="t('experience.professional')"
					:location="t('experience.cbpf')"
					:year="t('experience.2019-present')"
					:subtitle="t('experience.full-stack')"
				/>
			</div>
		</Card>
	</Section>
</template>
