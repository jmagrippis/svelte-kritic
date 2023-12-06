<script lang="ts">
	import YouTube from '$lib/icons/YouTube.svelte'
	import OutboundLink from './OutboundLink.svelte'

	export let href: string
</script>

<OutboundLink {href}
	><YouTube class="mb-1 mr-2 inline w-5 lg:w-7" /><slot /></OutboundLink
>
