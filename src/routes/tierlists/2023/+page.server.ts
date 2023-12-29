import type {TierListGame} from '$lib/server/repos/tierLists/TierListsInterface'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({locals}) => {
	const games = await locals.tierListsRepo.getTierList()

	const tiersWithGames = games.reduce<{name: string; games: TierListGame[]}[]>(
		(acc, game) => {
			const tier = acc.find((tier) => tier.name === game.tier)
			if (tier) {
				tier.games.push(game)
			} else {
				acc[0].games.push(game)
			}
			return acc
		},
		[
			{name: '?', games: []},
			{name: 'S', games: []},
			{name: 'A', games: []},
			{name: 'B', games: []},
			{name: 'C', games: []},
			{name: 'D', games: []},
			{name: 'E', games: []},
			{name: 'F', games: []},
		],
	)
	return {
		tiersWithGames,
		meta: {
			title: 'Johnny’s gaming tierlist for 2023!',
			description:
				'This is a categorisation of the games Johnny’s played in 2023!',
		},
	}
}
