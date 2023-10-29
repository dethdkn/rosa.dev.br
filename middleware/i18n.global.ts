export default defineNuxtRouteMiddleware(() => {
	const {$i18n} = useNuxtApp()
	let selectedLang = 'en'
	const language = useCookie('language')
	selectedLang = language.value !== 'en' && language.value !== 'pt-BR' ? 'en' : language.value
	$i18n.locale.value = selectedLang
})
