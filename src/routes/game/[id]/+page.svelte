<script lang="ts">
	export let data

	const dateFormat = Intl.DateTimeFormat('en-GB', {
		dateStyle: 'long',
	})
</script>

<main class="content-grid grow gap-y-4 pt-[5vh] text-lg lg:gap-y-8">
	<article class="breakout grid gap-8 lg:grid-cols-3">
		<img
			src={data.game.images.box.og}
			alt={`Box art for ${data.game.name}`}
			class="h-fit justify-self-center rounded"
		/>
		<div class="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
			<h1 class="breakout text-4xl font-bold">{data.game.name}</h1>
			<p class="italic">
				First released on {dateFormat.format(data.game.firstReleaseDate)}
			</p>
			<div class="text-3xl">
				{data.game.tier}: {data.game.topCriticScore.toFixed(2)}
			</div>
		</div>
		<p class="text-xl leading-relaxed lg:col-span-3">{data.game.description}</p>
	</article>
</main>
