import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({locals}) => {
	const games = await locals.tierListsRepo.getTierList()
	return {
		games,
		meta: {
			title: 'Johnny’s gaming tierlist for 2023!',
			description:
				'This is a categorisation of the games Johnny’s played in 2023!',
		},
	}
}
