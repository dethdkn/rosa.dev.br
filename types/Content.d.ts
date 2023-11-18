declare global {
	interface Content {
		img?: {
			href?: string
			img: string
			alt: string
			title?: string
			subtitle?: string
			anotherTitle?: string
		}
		video?: {
			url: string
			title: string
		}
	}
}

export { Content }
