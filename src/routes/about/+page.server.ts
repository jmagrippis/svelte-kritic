import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'About',
		description:
			'Learn more about SvelteKritic, SvelteKit, and the related YouTube videos by Johnny!',
	},
})
