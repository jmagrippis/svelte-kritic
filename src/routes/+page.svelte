<script lang="ts">
	import {afterNavigate, beforeNavigate} from '$app/navigation'
	import TierScore from '$lib/components/TierScore.svelte'
	import {dateFormat} from '$lib/dateFormat.js'

	export let data

	const setupTransitions = (id: string) => {
		const gameCard = document.getElementById(id)
		const imageElement = gameCard?.querySelector('img')
		const titleElement = gameCard?.querySelector('h3')

		if (imageElement) {
			imageElement.style.viewTransitionName = `hero-${id}`
		}
		if (titleElement) {
			titleElement.style.viewTransitionName = `title-${id}`
		}
	}

	beforeNavigate((navigation) => {
		if (navigation.to?.route.id === '/game/[id]' && navigation.to?.params?.id) {
			setupTransitions(navigation.to.params.id)
		}
	})

	afterNavigate((navigation) => {
		if (
			navigation.from?.route.id === '/game/[id]' &&
			navigation.from?.params?.id
		) {
			setupTransitions(navigation.from.params.id)
		}
	})
</script>

<main class="content-grid grow gap-y-4 text-lg lg:gap-y-8">
	<h2 class="breakout text-4xl font-bold">Hall of Fame 2023</h2>
	<ul class="breakout games-grid grid grid-flow-dense gap-4">
		{#each data.games as { id, name, tier, topCriticScore, images, firstReleaseDate }}
			<li
				id={`${id}`}
				class="game grid gap-4 rounded bg-surface-brand-2/60 pb-4 transition duration-300 hover:brightness-125 hover:saturate-[75%]"
			>
				<a href={`/game/${id}`}>
					<img
						src={images.box.og}
						alt={`Box art for ${name}`}
						class="aspect-game-box rounded-t"
						width={480}
						height={720}
					/>
				</a>
				<div class="px-4">
					<h3 class="font-bold">
						{name}
					</h3>
					<p class="italic">{dateFormat.format(firstReleaseDate)}</p>
				</div>
				<TierScore class="px-4" {tier} score={topCriticScore} />
			</li>
		{/each}
	</ul>
</main>

<style lang="postcss">
	.games-grid {
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr));
		grid-auto-rows: auto auto auto;
	}

	.game {
		grid-row: span 3;
		grid-template-rows: subgrid;
	}
</style>
