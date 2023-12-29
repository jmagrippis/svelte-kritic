export type Platform = 'nintendo' | 'playstation' | 'xbox' | 'pc'
export type Tier = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | '?'
export type TierListGame = {
	id: number
	image: string
	name: string
	platform: Platform
	startedPlayingAt: string
	thoughts?: string
	seenCredits: boolean
	overclocked: boolean
	tier: Tier
}

export interface TierListsRepo {
	getTierList(): Promise<TierListGame[]>
}
