<script lang='ts'>
    import { onMount } from "svelte";
    import { Button, Modal } from "flowbite-svelte";


    import { selectedFundr, selectedCurrency, currencySymbol, supportModalExpanded } from "$lib/stores/state";
    import Currency from "$lib/components/reusable/Currency.svelte";

    let isExpanded = false
    function openDonate() {
        isExpanded = !isExpanded
    }

    let supportValue:number = 0

    async function submitTransaction() {

    }

</script>

<Modal open={$supportModalExpanded} size="sm" outsideclose>
    <div class="text-center">
      <!-- <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> -->
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Support</h3>

        <div class='flex flex-row'>
        <span class='mt-2'>Currency</span>
          <div>
            <Currency/>
          </div>
        </div>

        <div class='flex flex-row mt-2 '>
          <span class='mt-2'>Amount</span>
          <div>
            <input bind:value={supportValue} type='number' class='px-2 py-2 border rounded-lg w-16' min=0 >
          </div>
        </div>
      {#if supportValue}
      <div class='mt-6'>
        <span class=''>Supporting: {$selectedFundr.title}</span>
        <span class=''>Amount: {$currencySymbol}{supportValue} {$selectedCurrency}</span>

      </div>


      {/if}
      <Button color="alternative" class="mr-2">Yes, I'm sure</Button>
      <Button on:click={submitTransaction} color='green'>Contribute</Button>
    </div>
  </Modal>