<script lang="ts">
	import '@fontsource-variable/inconsolata'

	import '../app.css'

	import {onMount} from 'svelte'
	import {onNavigate} from '$app/navigation'
	import {page} from '$app/stores'
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'

	const defaultMeta = {
		title: 'SvelteKritic',
		description:
			'A place to query the OpenCritic API, with that sweet SvelteKit UX 🚀',
	}

	$: title = $page.data.meta?.title
		? `${$page.data.meta?.title} 👾 SvelteKritic`
		: defaultMeta.title
	$: description = $page.data.meta?.description ?? defaultMeta.description

	onMount(() => {
		// crucially removes the "pointer-events-none" class
		// now that our app is hydrated
		document.documentElement.removeAttribute('class')
	})

	onNavigate((navigation) => {
		if (
			document.startViewTransition &&
			navigation.from?.url.href !== navigation.to?.url.href
		) {
			if (navigation.delta && navigation.delta < 0) {
				document.documentElement.dataset.back = 'true'
			} else {
				document.documentElement.removeAttribute('data-back')
			}

			return new Promise((resolve) => {
				document.startViewTransition &&
					document.startViewTransition(async () => {
						resolve()
						await navigation.complete
					})
			})
		}
	})
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SvelteKritic" />
	<meta property="og:url" content={$page.url.href} />
</svelte:head>

<Header />
<slot />
<Footer />
