import {ONE_DAY_IN_SECONDS} from '$lib/time'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({locals, setHeaders}) => {
	const games = await locals.gamesRepo.getHallOfFame(2023)

	setHeaders({
		'Cache-Control': `private, max-age=${ONE_DAY_IN_SECONDS}`,
	})

	return {games}
}
