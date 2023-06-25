<script lang="ts">
	import { walletAddress } from '$lib/stores/provider';

	let selectedClass =
		'border-[#8836BF] whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium';
	let unselectedClass =
		'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium';
</script>

<div class="relative border-b border-gray-200 pb-5 sm:pb-0 font-mono">
	<div class="md:flex md:items-center md:justify-between">
		<h3 class="text-base font-semibold text-gray-900">Candidates</h3>
		<div class="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
			<button
				type="button"
				class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
				>Share</button
			>
			<a
				href="/new"
				class="ml-3 inline-flex items-center rounded-md bg-[#9649cb] px-3 py-2 text-sm font-semibold text-white shadow-sm
        hover:bg-[#8836BF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-[1.05] transition"
				>Create</a
			>
		</div>
	</div>
	<div class="mt-4">
		<!-- Dropdown menu on small screens -->
		<div class="sm:hidden">
			<label for="current-tab" class="sr-only">Select a tab</label>
			<select
				id="current-tab"
				name="current-tab"
				class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
			>
				<option>Media</option>
				<option>Communities</option>
				<option>Orgs</option>
				<option>Non-profits</option>
			</select>
		</div>
		<!-- Tabs at small breakpoint and up -->
		<div class="hidden sm:block">
			<nav class="-mb-px flex space-x-8">
				<button class={selectedClass}>Media</button>
				<button class={unselectedClass}>Communities</button>
				<button class={unselectedClass} aria-current="page">Orgs</button>
				<button class={unselectedClass}>Non-profits</button>
			</nav>
		</div>
	</div>
</div>
