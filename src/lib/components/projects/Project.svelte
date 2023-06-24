<script lang='ts'>
    import { onMount } from "svelte";
    import { walletAddress } from "$lib/stores/provider";


    interface Value {
      symbol: string
      amount: number
    }
    interface Subscriber {
      address: string
      chainid: string
      contribution: Value[]
    }
    interface Project {
      name: string,
      timeStarted: number // block time stamps, or a ContractBlockStamps[] for multiple chains
      signers: string[]
      totalValue: number
      subscribers: Subscriber[]

    }
</script>




<div class="rounded-2.5xl max-w-md p-6 ring-2 s xl:p-10 ring-gray-200">
    <h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">Freelancer</h3>
    <p class="mt-4 text-sm leading-6 text-gray-600">The essentials to provide your best work for clients.</p>
    <p class="mt-6 flex items-baseline gap-x-1">
      <!-- Price, update based on frequency toggle state -->
      <span class="text-4xl font-bold tracking-tight text-gray-900">$15</span>
      <!-- Payment frequency, update based on frequency toggle state -->
      <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
    </p>
    <a href="/" aria-describedby="tier-freelancer" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600">Buy plan</a>
    <ul class="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-600">
      <li class="flex gap-x-3">
        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        5 products
      </li>
      <li class="flex gap-x-3">
        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        Up to 1,000 subscribers
      </li>
      <li class="flex gap-x-3">
        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        Basic analytics
      </li>
      <li class="flex gap-x-3">
        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        48-hour support response time
      </li>
    </ul>
  </div>



