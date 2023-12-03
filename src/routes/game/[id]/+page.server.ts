import {error} from '@sveltejs/kit'
import type {PageServerLoad} from './$types'

const FIVE_MINUTES_IN_SECONDS = 5 * 60

export const load: PageServerLoad = async ({locals, params, setHeaders}) => {
	const game = await locals.gamesRepo.getGame(params.id)

	if (!game) {
		throw error(404, {
			message: 'Not found',
		})
	}

	setHeaders({
		'Cache-Control': `private, max-age=${FIVE_MINUTES_IN_SECONDS}`,
	})

	return {game, meta: {title: game.name}}
}
