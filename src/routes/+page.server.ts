import type {PageServerLoad} from './$types'

const FIVE_MINUTES_IN_SECONDS = 5 * 60

export const load: PageServerLoad = async ({locals, setHeaders}) => {
	const games = await locals.gamesRepo.getHallOfFame(2023)

	setHeaders({
		'Cache-Control': `private, max-age=${FIVE_MINUTES_IN_SECONDS}`,
	})

	return {games}
}
