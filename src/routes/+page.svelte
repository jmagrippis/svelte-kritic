<script lang="ts">
	import {afterNavigate, beforeNavigate} from '$app/navigation'

	export let data

	const dateFormat = Intl.DateTimeFormat('en-GB', {
		month: 'long',
		day: 'numeric',
	})

	const setupTransitions = (id: string) => {
		const gameElement = document.getElementById(`game-${id}`)
		if (gameElement) {
			gameElement.dataset.hero = 'true'
			const heroImage = gameElement.querySelector('img')
			const title = gameElement.querySelector('h3')

			if (heroImage) {
				heroImage.style.viewTransitionName = 'hero'
			}
			if (title) {
				title.style.viewTransitionName = 'game-title'
			}
		}
	}
	const cleanupPreviousHero = () => {
		const previousHero = document.querySelector('[data-hero]')

		if (previousHero) {
			previousHero.removeAttribute('data-hero')
			const heroImage = previousHero.querySelector('img')
			const title = previousHero.querySelector('h3')

			if (heroImage) {
				heroImage.style.viewTransitionName = ''
			}
			if (title) {
				title.style.viewTransitionName = ''
			}
		}
	}

	beforeNavigate((navigation) => {
		if (navigation.to?.route.id === '/game/[id]' && navigation.to?.params?.id) {
			cleanupPreviousHero()

			const elementId = navigation.to.params.id
			setupTransitions(elementId)
		}
	})

	afterNavigate(async (navigation) => {
		if (
			navigation.from?.route.id === '/game/[id]' &&
			navigation.from?.params?.id
		) {
			const elementId = navigation.from.params.id
			setupTransitions(elementId)
		}
	})
</script>

<main class="content-grid grow gap-y-4 pt-[5vh] text-lg lg:gap-y-8">
	<h2 class="breakout text-4xl font-bold">Hall of Fame 2023</h2>
	<ul class="breakout games-grid grid grid-flow-dense gap-4">
		{#each data.games as { id, name, tier, topCriticScore, images, firstReleaseDate }}
			<li
				id={`game-${id}`}
				class="game grid gap-4 rounded bg-surface-brand-2/60 pb-4"
			>
				<a href={`/game/${id}`}>
					<img
						src={images.box.og}
						alt={`Box art for ${name}`}
						class="h-fit rounded-t"
					/>
				</a>
				<div>
					<h3 class="font-bold">
						{name}
					</h3>
					<p class="italic">{dateFormat.format(firstReleaseDate)}</p>
				</div>
				<div class="text-3xl">{tier}: {topCriticScore}</div>
			</li>
		{/each}
	</ul>
</main>

<style>
	.games-grid {
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr));
		grid-auto-rows: auto auto auto;
		container-type: inline-size;
	}

	.game {
		grid-row: span 3;
		grid-template-rows: subgrid;

		& > :not(a:has(img)) {
			@apply px-4;
		}
	}
</style>
