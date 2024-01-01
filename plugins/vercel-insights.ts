import { SpeedInsights } from '@vercel/speed-insights/nuxt'

export default defineNuxtPlugin(({ vueApp }) => {
	vueApp.component('VercelSpeedInsights', SpeedInsights)
})
