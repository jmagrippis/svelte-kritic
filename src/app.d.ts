// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	// fresh API just dropped, let's extend Document
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void
	}
	interface Window {
		toggleTheme?(): void
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
