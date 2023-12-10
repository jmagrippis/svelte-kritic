<script lang="ts">
	import {page} from '$app/stores'
	import kritic from '$lib/images/svelte-kritic.png?enhanced&w=64&img'
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'

	const activePageClasses =
		'underline decoration-foreground-accent decoration-dashed decoration-2'

	$: pageTitleElement = $page.url.pathname === '/' ? 'h1' : 'span'
</script>

<header class="sticky top-0 z-50 mb-[5vh] bg-surface-brand-1/80 backdrop-blur">
	<nav class="flex items-center justify-between px-2 py-4">
		<a
			href="/"
			class={`flex items-center gap-4 font-bold ${
				$page.url.pathname === '/' ? activePageClasses : ''
			}`}
		>
			<enhanced:img
				class={`w-6 ${$page.url.pathname !== '/' ? 'saturate-50' : ''}`}
				src={kritic}
				alt="The Kritic, SvelteKritic’s mascot"
			/>
			<svelte:element this={pageTitleElement} class="inline-block"
				>SvelteKritic</svelte:element
			></a
		>
		<div class="flex gap-4">
			<ul class="flex gap-4">
				<li>
					<a
						href="/about"
						class={$page.url.pathname.startsWith('/about')
							? activePageClasses
							: undefined}>about</a
					>
				</li>
			</ul>
			<button
				class="hover:text-primary-400"
				aria-label="toggle theme"
				aria-live="polite"
				on:click|preventDefault={() => {
					window.toggleTheme && window.toggleTheme()
				}}
			>
				<span class="sr-only">toggle theme</span>
				<ThemeToggleIcon className="w-6" />
			</button>
		</div>
	</nav>
</header>

<style>
	header {
		view-transition-name: header;
	}
</style>
