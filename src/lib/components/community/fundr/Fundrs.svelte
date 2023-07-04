<script lang='ts'>
    import { onMount } from "svelte";
    import { walletAddress } from "$lib/stores/provider";
    import { type FUNDR, fundrs } from '$lib/config'
    import { categoryFundrExplore, currencySymbol, selectedCurrency, selectedFundr, viewFundrModal } from "$lib/stores/state";
    import { goto } from "$app/navigation";
    import { Modal } from "flowbite-svelte";
    import { verifyMessage } from "ethers/lib/utils";

    function gotoPledge() {
      goto('/creators/profile')
    }

    function viewMore(fundr:FUNDR) {
      selectedFundr.set(fundr)
      viewFundrModal.set(!$viewFundrModal)
    }


</script>



<div class="">
  <div class="mx-auto max-w-2xl px-6 py-12 sm:px-6 sm:py-12 lg:max-w-[80rem] lg:px-8 font-mono">   
    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
      {#each fundrs as fundr}
        {#if fundr.category == $categoryFundrExplore || $categoryFundrExplore == 'All'}
          <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:scale-[1.02] transition ">
            <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-95 sm:h-96">
              <img src="{fundr.images[0]}" alt="artist" class="h-full w-full object-cover object-center sm:h-full sm:w-full scale-[0.5]">
            </div>
            <div class="flex flex-1 flex-col space-y-1 p-4">
              <h3 class="text-md font-bold">{fundr.title}</h3>
              <span aria-hidden="true" class="text-xs text-gray-600">{fundr.profession}</span>

              <div id='location' class=''>
                <span class="text-sm text-gray-500 mt-3">
                  <span class=''> 
                    {fundr.country}
                  </span>{fundr.location}
                </span>
              </div>




              
              <div class=''>
                {#if fundr.goal > 0}
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-[#63C132] h-2.5 rounded-full" style="width: 45%"></div>
                  </div>
                {:else}
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-[#63C132] h-2.5 rounded-full" style="width: 100%"></div>
                  </div>
                {/if}
              </div>
              <div class='pt-2'>
                <span class='text-2xl'>
                  {$currencySymbol}{fundr.totalValue} {$selectedCurrency} raised
                </span>

              </div>  
              <div class="flex flex-col">
                  <span class="text-sm italic  text-gray-400 mt-2">{fundr.subscribers.length} supporters this month</span>
              
                  {#if Number(fundr.minimum) > 0}
                  <span class='text-sm italic  text-gray-400 mt'>
                    {fundr.minimum} ETH minimum pledge to participate
                  </span>

                {/if}
                </div>
              <div class='pt-5'>

                <button on:click={(e)=>viewMore(fundr)} class='px-2 py-2 border-[#EBEBEB] border rounded-xl shadow-sm hover:scale-[1.06] transition hover:shadow-md'>View</button>
                <button on:click={gotoPledge} type="button" class="ml-3 inline-flex items-center rounded-md bg-[#9649cb] hover:bg-[#3AB800] px-3 py-2 text-sm font-semibold text-white shadow-sm
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-[1.05] transition">Pledge</button>
              </div>

            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
{#if $viewFundrModal && $selectedFundr}
  <div class=''>
    <Modal title={$selectedFundr.title} bind:open={$viewFundrModal}>
      <div class=''>
        {$selectedFundr.description}
      </div>
    </Modal>
  </div>
{/if}