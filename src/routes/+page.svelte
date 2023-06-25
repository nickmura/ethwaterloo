<script>
	import Category from '$lib/components/projects/Category.svelte';
	import Project from '$lib/components/projects/Project.svelte';
</script>

<div class="mx-auto max-w-7xl px-2 sm:px-4 md:px-5 justify-between mt-8">
	<Category />
</div>

<main class="flex flex-col p-10 w-screen h-screen items-center gap-5 font-mono">
	<Project />
</main>
