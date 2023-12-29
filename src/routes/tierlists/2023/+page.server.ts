import type {TierListGame} from '$lib/server/repos/tierLists/TierListsInterface'
import {ONE_HOUR_IN_SECONDS} from '$lib/time'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({locals, setHeaders}) => {
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

	setHeaders({
		'Cache-Control': `public, max-age=${ONE_HOUR_IN_SECONDS}`,
	})

	return {
		tiersWithGames,
		meta: {
			title: 'Johnny’s gaming tierlist for 2023!',
			description:
				'This is a categorisation of the games Johnny played in 2023! It’s a miracle any game ever gets released, so don’t fret too much if a game you love is ranked lower than you expected 😅 I recognise all games are awesome, to even make it to these rankings is a huge feat, and the more stuff you enjoy the better 🙌',
		},
	}
}
