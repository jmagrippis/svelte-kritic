import Airtable from 'airtable'
import {AIRTABLE_API_KEY} from '$env/static/private'
import type {
	Platform,
	Tier,
	TierListGame,
	TierListsRepo,
} from './TierListsInterface'

export type AirtableGame = {
	OpenCriticId: number
	Platform: Platform
	'Started Playing At': string
	Thoughts?: string
	Credits: boolean
	Overclocked: boolean
	Tier: Tier
	Name: string
	'Image Box': string
	'Image Banner': string
}

export class AirtableApiTierLists implements TierListsRepo {
	#svelteKriticBaseId = 'appDkA5oj3soDQI9w'
	#airtableClient = new Airtable({apiKey: AIRTABLE_API_KEY}).base(
		this.#svelteKriticBaseId,
	)

	#airtableGameToTierListGame = (airtableGame: AirtableGame): TierListGame => ({
		id: airtableGame.OpenCriticId,
		name: airtableGame.Name,
		images: {
			box:
				airtableGame['Image Box'] ??
				`https://placehold.co/480x720?text=${encodeURIComponent(
					airtableGame.Name,
				)}`,
			banner:
				airtableGame['Image Banner'] ??
				`https://placehold.co/460x215?text=${encodeURIComponent(
					airtableGame.Name,
				)}`,
		},
		platform: airtableGame.Platform,
		startedPlayingAt: airtableGame['Started Playing At'],
		thoughts: airtableGame.Thoughts,
		seenCredits: !!airtableGame.Credits,
		overclocked: !!airtableGame.Overclocked,
		tier: airtableGame.Tier ?? '?',
	})

	#isAirtableGame = (game: unknown): game is AirtableGame =>
		typeof game === 'object' &&
		game !== null &&
		'OpenCriticId' in game &&
		'Platform' in game

	async getTierList() {
		const games: TierListGame[] = []
		await this.#airtableClient('Games')
			.select({sort: [{field: 'Started Playing At', direction: 'asc'}]})
			.eachPage((records, fetchNextPage) => {
				records.forEach((record) => {
					if (this.#isAirtableGame(record.fields)) {
						games.push(this.#airtableGameToTierListGame(record.fields))
					}
				})

				fetchNextPage()
			})

		return games
	}
}
