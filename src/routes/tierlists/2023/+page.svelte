<script lang="ts">
	import {dateFormat} from '$lib/dateFormat.js'

	export let data
</script>

<main class="content-grid gap-y-4 text-xl lg:gap-y-8 lg:text-2xl">
	<h1 class="text-4xl font-bold lg:text-6xl">SvelteKritic Games of 2023</h1>
	<p>This is a categorisation of the games Johnny’s played in 2023!</p>
	<p>
		Not necessarily released in 2023, but <strong>played</strong> for a meaningful
		amount time in 2023 😄
	</p>
	{#each data.tiersWithGames as tierWithGames}
		{#if tierWithGames.games.length > 0}
			<h2 class="text-3xl font-bold">{tierWithGames.name} Tier</h2>
			<ul class="breakout games-grid grid grid-flow-dense gap-4">
				{#each tierWithGames.games as { id, name, images, startedPlayingAt }}
					<li
						id={`${id}`}
						class="game subgrid row-span-3 grid grid-rows-subgrid gap-4 rounded bg-surface-brand-2/60 pb-4 transition duration-300 @container hover:brightness-125 hover:saturate-[75%]"
					>
						<a href={`/game/${id}`}>
							<img
								src={images.box}
								alt={`Box art for ${name}`}
								class="aspect-game-box rounded-t @sm:hidden"
								width={480}
								height={720}
							/>
							<img
								src={images.banner}
								alt={`banner art for ${name}`}
								class="hidden aspect-game-banner w-full rounded-t @sm:block"
								width={600}
								height={280}
							/>
						</a>
						<h3 class="justify-self-start font-bold">{name}</h3>
						<p class="italic">
							First played: {dateFormat.format(new Date(startedPlayingAt))}
						</p>
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
</main>

<style lang="postcss">
	.games-grid {
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr));
		grid-auto-rows: auto auto auto;
	}

	.game > :not(a) {
		@apply px-4;
	}
</style>
