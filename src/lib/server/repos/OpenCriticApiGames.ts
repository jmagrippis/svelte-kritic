import {RAPID_API_KEY} from '$env/static/private'
import {PUBLIC_OPEN_CRITIC_RAPID_API_HOST} from '$env/static/public'
import type {GameImageSet, GamesRepo, Tier} from './GamesInterface'

type OpenCriticGame = {
	id: number
	name: string
	url: string
	firstReleaseDate: string // ISO Date
	topCriticScore: number
	tier: Tier
	images: {
		box: GameImageSet
		banner: GameImageSet
	}
}

export class OpenCriticApiGames implements GamesRepo {
	#baseUrl = 'https://opencritic-api.p.rapidapi.com'
	#imageBaseUrl = 'https://img.opencritic.com'
	#rapidApiKey = RAPID_API_KEY
	#openCriticRapidHost = PUBLIC_OPEN_CRITIC_RAPID_API_HOST

	#deriveAbsoluteImageUrl = (path: string) => `${this.#imageBaseUrl}/${path}`
	async getHallOfFame(year: number) {
		const url = `${this.#baseUrl}/game/hall-of-fame/${year}`

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': this.#rapidApiKey,
				'X-RapidAPI-Host': this.#openCriticRapidHost,
			},
		})

		const json: OpenCriticGame[] = await response.json()

		return json.map(({firstReleaseDate, images, ...restProps}) => ({
			...restProps,
			firstReleaseDate: new Date(firstReleaseDate),
			images: {
				box: {
					og: this.#deriveAbsoluteImageUrl(images.box.og),
					sm: this.#deriveAbsoluteImageUrl(images.box.sm),
				},
				banner: {
					og: this.#deriveAbsoluteImageUrl(images.banner.og),
					sm: this.#deriveAbsoluteImageUrl(images.banner.sm),
				},
			},
		}))
	}
}
