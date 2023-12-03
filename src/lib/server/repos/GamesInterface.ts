export type Tier = 'Mighty' | 'Strong' | 'Fair' | 'Weak'

export type GameImageSet = {
	og: string
	sm: string
}
export type Game = {
	id: number
	name: string
	firstReleaseDate: Date
	topCriticScore: number
	tier: Tier
	images: {
		box: GameImageSet
		banner: GameImageSet
	}
	description: string
}
export type HallOfFameGamePartial = Omit<Game, 'description'>

export interface GamesRepo {
	getHallOfFame(year: number): Promise<HallOfFameGamePartial[]>
	getGame(id: number | string): Promise<Game | null>
}
