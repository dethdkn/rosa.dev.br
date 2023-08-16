export default defineNuxtRouteMiddleware(() => {
	const {$i18n} = useNuxtApp()
	let selectedLang = 'en-US'
	const language = useCookie('language')
	selectedLang = language.value !== 'en-US' && language.value !== 'pt-BR' ? 'en-US' : language.value
	$i18n.locale.value = selectedLang
})
