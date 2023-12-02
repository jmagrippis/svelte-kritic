<script lang="ts">
	import YouTubeIcon from '$lib/icons/YouTube.svelte'
	import GitHubIcon from '$lib/icons/GitHub.svelte'
	import DiscordIcon from '$lib/icons/Discord.svelte'
	import PulsingHeart from './PulsingHeart.svelte'
</script>

<footer class="bg-surface-1 flex items-center justify-center gap-2 py-2">
	<div class="flex shrink-0 items-center justify-center gap-2">
		Made with
		<PulsingHeart />
		by <a href="https://magrippis.com">jmagrippis</a>
	</div>

	<a
		href="https://www.youtube.com/@johnnifytech"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Johnny’s YouTube channel"
		class="hover:text-emphasis-hover"
	>
		<YouTubeIcon class="w-5" />
	</a>
	<a
		href="https://github.com/jmagrippis/svelte-kritic"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="checkout the source code at the github repo"
		class="hover:text-emphasis-hover"
	>
		<GitHubIcon class="w-5" />
	</a>
	<a
		href="https://discord.gg/eR5Q52Sfm3"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Join Johnny's Discord community!"
		class="hover:text-emphasis-hover"
	>
		<DiscordIcon class="w-5" />
	</a>
</footer>

<style>
	footer {
		view-transition-name: footer;
	}
</style>
