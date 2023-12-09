export type Tier = 'Mighty' | 'Strong' | 'Fair' | 'Weak'

export type GameImageSet = {
	og: string
	sm: string
}

export type Images = {
	box: GameImageSet
	banner: GameImageSet
	masthead: GameImageSet
}

export type Game = {
	id: number
	name: string
	firstReleaseDate: Date
	topCriticScore: number
	tier: Tier
	images: Images
	description: string
}
export type HallOfFameImages = Pick<Images, 'box' | 'banner'>

export type HallOfFameGamePartial = Omit<Game, 'description' | 'images'> & {
	images: HallOfFameImages
}

export interface GamesRepo {
	getHallOfFame(year: number): Promise<HallOfFameGamePartial[]>
	getGame(id: number | string): Promise<Game | null>
}
