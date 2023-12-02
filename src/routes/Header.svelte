<script lang="ts">
	import {page} from '$app/stores'
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'

	const activePageClasses =
		'underline decoration-foreground-accent decoration-dashed decoration-2'
</script>

<header class="bg-surface-2 mb-2">
	<nav class="container flex justify-between px-2 py-4">
		<a
			href="/"
			class={`font-bold ${$page.url.pathname === '/' ? activePageClasses : ''}`}
			>SvelteKritic</a
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
