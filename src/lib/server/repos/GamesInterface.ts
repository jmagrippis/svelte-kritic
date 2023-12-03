export type Tier = 'Mighty' | 'Strong' | 'Fair' | 'Weak'

export type GameImageSet = {
	og: string
	sm: string
}
export type Game = {
	id: number
	name: string
	url: string
	firstReleaseDate: Date
	topCriticScore: number
	tier: Tier
	images: {
		box: GameImageSet
		banner: GameImageSet
	}
}

export interface GamesRepo {
	getHallOfFame(year: number): Promise<Game[]>
}
