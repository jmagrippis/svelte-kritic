<script lang="ts">
	export let data

	const dateFormat = Intl.DateTimeFormat('en-GB', {
		month: 'long',
		day: 'numeric',
	})
</script>

<main class="content-grid grow gap-y-4 pt-[5vh] text-lg lg:gap-y-8">
	<h2 class="breakout text-4xl font-bold">Hall of Fame 2023</h2>
	<ul class="breakout games-grid grid grid-flow-dense gap-4">
		{#each data.games as { id, name, tier, topCriticScore, images, firstReleaseDate }}
			<li class="game grid gap-4 rounded bg-surface-brand-2/60 pb-4">
				<a href={`/game/${id}`}>
					<img
						src={images.box.og}
						alt={`Box art for ${name}`}
						class="h-fit rounded-t"
						style={`view-transition-name: hero-${id}`}
					/>
				</a>
				<div>
					<h3 class="font-bold" style={`view-transition-name: title-${id}`}>
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
