<script>
	import OutboundLink from '$lib/components/OutboundLink.svelte'
	import YouTubeLink from '$lib/components/YouTubeLink.svelte'
</script>

<main class="content-grid gap-y-4 text-xl lg:gap-y-8 lg:text-2xl">
	<h1 class="text-4xl font-bold lg:text-6xl">About</h1>
	<p>
		SvelteKritic is the <OutboundLink href="https://kit.svelte.dev/"
			>SvelteKit</OutboundLink
		>
		way to query the
		<OutboundLink href="https://opencritic.com/">OpenCritic API</OutboundLink>!
		See the latest and greatest games, without intrusive adds, while still
		supporting the great OpenCritic project 😄
	</p>
	<p>
		Above all, SvelteKritic is a demo app meant to accompany Johnny’s videos on
		the <YouTubeLink href="https://www.youtube.com/@johnnifytech"
			>View Transitions API</YouTubeLink
		>! Give your web apps that
		<YouTubeLink href="https://www.youtube.com/@johnnifytech"
			>App-Like feel</YouTubeLink
		> 🚀, and delight your users!
	</p>
</main>
