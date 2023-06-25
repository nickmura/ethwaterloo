<script lang="ts">
	import { createCampaign } from '$lib/campaigns/create';
	import { parseEther } from 'ethers/lib/utils';

	let title = '';
	let description = '';
	let goal = '';
	let selectedCurrency: 'USD' | 'CAD' | 'ETH' = 'USD';
	let imageInput: FileList;

	let isValidGoal = false;
	$: {
		try {
			isValidGoal = goal && Number(goal) > 0 ? true : false;
		} catch {
			isValidGoal = false;
		}
	}
	$: isValidInput = title && description && isValidGoal;

	const create = () => {
		const campaign = {
			title,
			description,
			imageUrl: undefined,
			goal: {
				currency: selectedCurrency,
				amount: parseEther(String(goal)).toBigInt(),
			},
		};
		createCampaign(
			campaign,
			imageInput && imageInput.length === 1 ? imageInput[0] : undefined
		);
	};
</script>

<main class="flex flex-col p-10 w-screen h-screen items-center gap-5 font-mono">
	<div class="mx-auto max-w-7xl p-5">
		<form>
			<div class="space-y-12">
				<div class="border-b border-gray-900/10 pb-12">
					<h2 class="text-base font-semibold leading-7 text-gray-900">
						Create A Listing
					</h2>
					<p class="mt-1 text-sm leading-6 text-gray-600">
						This information will be displayed to the public.
					</p>

					<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div class="sm:col-span-4">
							<label
								for="username"
								class="block text-sm font-medium leading-6 text-gray-900"
								>Title</label
							>
							<div class="mt-2">
								<div
									class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
								>
									<input
										bind:value={title}
										type="text"
										name="username"
										id="username"
										autocomplete="username"
										class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="The X project"
									/>
								</div>
							</div>
						</div>

						<div class="col-span-full">
							<label
								for="about"
								class="block text-sm font-medium leading-6 text-gray-900"
								>About</label
							>
							<div class="mt-2">
								<textarea
									bind:value={description}
									id="about"
									name="about"
									rows="3"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<p class="mt-3 text-sm leading-6 text-gray-600">
								Write a few sentences about this initiative.
							</p>
						</div>

						<div class="col-span-full">
							<label
								for="cover-photo"
								class="block text-sm font-medium leading-6 text-gray-900"
								>Photo</label
							>
							<div
								class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
							>
								<div class="text-center">
									<svg
										class="mx-auto h-12 w-12 text-gray-300"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<div class="mt-4 flex text-sm leading-6 text-gray-600">
										<label
											for="file-upload"
											class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
										>
											<span>Upload a file</span>
											<input
												id="file-upload"
												bind:files={imageInput}
												name="file-upload"
												type="file"
												accept="image/*"
												class="sr-only"
											/>
										</label>
										<p class="pl-1">or drag and drop</p>
									</div>
									<p class="text-xs leading-5 text-gray-600" />
								</div>
							</div>
						</div>
					</div>
					<p class="mt-1 text-sm leading-6 text-gray-600">
						Optional, Add a photo to help showcase the initiative.
					</p>
					<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
						<div>
							<label
								for="price"
								class="inline-block text-sm font-medium leading-6 text-gray-900"
								>Goal</label
							>
							<div class="relative mt-2 rounded-md shadow-sm">
								<div
									class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
								>
									<span class="text-gray-500 sm:text-sm">$</span>
								</div>
								<input
									bind:value={goal}
									type="number"
									name="price"
									id="price"
									class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="0.00"
								/>
								<div class="absolute inset-y-0 right-0 flex items-center">
									<label for="currency" class="sr-only">Currency</label>
									<select
										bind:value={selectedCurrency}
										id="currency"
										name="currency"
										class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
									>
										<option>USD</option>
										<option>CAD</option>
										<option>ETH</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-6 flex items-center justify-end gap-x-6">
					<button
						on:click={() => history.back()}
						type="button"
						class="text-sm font-semibold leading-6 text-gray-900">Cancel</button
					>
					<button
						disabled={!isValidInput}
						on:click={create}
						type="submit"
						class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Create</button
					>
				</div>
			</div>
		</form>
	</div>
</main>
