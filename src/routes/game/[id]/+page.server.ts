import {error} from '@sveltejs/kit'
import type {PageServerLoad} from './$types'
import {ONE_DAY_IN_SECONDS} from '$lib/time'

export const load: PageServerLoad = async ({locals, params, setHeaders}) => {
	const game = await locals.gamesRepo.getGame(params.id)

	if (!game) {
		error(404, {
			message: 'Not found',
		})
	}

	setHeaders({
		'Cache-Control': `private, max-age=${ONE_DAY_IN_SECONDS}`,
	})

	return {game, meta: {title: game.name}}
}
