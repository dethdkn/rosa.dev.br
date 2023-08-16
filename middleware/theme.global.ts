export default defineNuxtRouteMiddleware(() => {
	const theme = useCookie('theme')
	if (process.client)
		theme.value === 'light'
			? document.getElementsByTagName('html')[0].classList.remove('dark')
			: document.getElementsByTagName('html')[0].classList.add('dark')
})
