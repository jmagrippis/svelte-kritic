<script lang="ts">
	import TierScore from '$lib/components/TierScore.svelte'

	export let data

	const dateFormat = Intl.DateTimeFormat('en-GB', {
		dateStyle: 'long',
	})

	$: ({id, name, tier, topCriticScore, images, firstReleaseDate, description} =
		data.game)
</script>

<main class="content-grid grow gap-y-4 text-lg lg:gap-y-8">
	<article class="breakout grid gap-8 lg:grid-cols-3">
		<img
			src={images.box}
			alt={`Box art for ${name}`}
			class="aspect-game-box justify-self-center rounded"
			style={`view-transition-name: hero-${id};`}
		/>
		<div class="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
			<h1
				class="breakout text-4xl font-bold"
				style={`view-transition-name: title-${id}`}
			>
				{name}
			</h1>
			<p class="italic">
				First released on {dateFormat.format(firstReleaseDate)}
			</p>
			<TierScore {tier} score={topCriticScore.toFixed(2)} />
		</div>
		<p class="text-xl leading-relaxed lg:col-span-3">{description}</p>
	</article>
</main>
