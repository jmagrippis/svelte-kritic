import {OpenCriticApiGames} from '$lib/server/repos/OpenCriticApiGames'
import {AirtableApiTierLists} from '$lib/server/repos/tierLists/AirtableApiTierLists'
import type {Handle} from '@sveltejs/kit'

export const handle: Handle = async ({event, resolve}) => {
	event.locals.gamesRepo = new OpenCriticApiGames()
	event.locals.tierListsRepo = new AirtableApiTierLists()

	const response = await resolve(event)

	return response
}
