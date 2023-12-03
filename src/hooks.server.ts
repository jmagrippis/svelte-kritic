import {OpenCriticApiGames} from '$lib/server/repos/OpenCriticApiGames'
import type {Handle} from '@sveltejs/kit'

export const handle: Handle = async ({event, resolve}) => {
	event.locals.gamesRepo = new OpenCriticApiGames()

	const response = await resolve(event)

	return response
}
