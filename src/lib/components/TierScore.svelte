<script lang="ts">
	export let tier: string
	export let score: string | number
	let className = ''
	export {className as class}
</script>

<div
	class={`${className} bg-gradient-to-b from-primary-800 to-foreground-accent bg-clip-text text-3xl font-bold text-transparent dark:from-primary-200 dark:to-foreground-accent`}
>
	{tier}: {score}
</div>
