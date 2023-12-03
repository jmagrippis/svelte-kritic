import type {GamesRepo} from '$lib/server/repos/GamesInterface'

declare global {
	// fresh API just dropped, let's extend Document
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void
	}
	interface Window {
		toggleTheme?(): void
	}
	// for enhanced images with query params such as w=64
	declare module '*&img'

	namespace App {
		// interface Error {}
		interface Locals {
			gamesRepo: GamesRepo
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
