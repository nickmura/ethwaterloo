<script lang="ts">
  import { onMount } from 'svelte';
  import { ethers } from 'ethers'
  import Currency from '$lib/components/reusable/Currency.svelte';
  import { fundrs,  type FUNDR } from '$lib/config'
  import { currencySymbol, selectedCurrency, selectedFundr } from '$lib/stores/state';
  import { Button, Modal } from 'flowbite-svelte'
  import ABI from '$lib/abis/Crowdfunding.json'


  
  onMount(() => {
    fundr = $selectedFundr
    // console.log('line 14, Fundr.svelte', $selectedFundr)
  })

  let fundr:FUNDR = $selectedFundr


  let supportValue =  0

  let isExpanded = false
  function openDonate() {
    isExpanded = !isExpanded
  }


  async function submitTransaction() {
      console.log('submit')

      try {
        const contractAddress = '0x8CcFa6C61Bb17aecEcC850409c30551645fa249a'
        const provider = new ethers.providers.JsonRpcProvider()
        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress, ABI, signer)
        const tx = await contract.sendTransaction({
          to: contractAddress,
          value: supportValue
        })
      } catch (error) {
        //@ts-ignore
        console.log(error.message)
      }
  }
</script>




  
  <main>
    {#if fundr}
    <!-- <header class="relative isolate pt-1">
      
  
      <div class="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          

        </div>
      </div>
    </header> -->
  
    <div class="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- fundr Summary card  -->
        <div class="lg:col-start-3 lg:row-end-1">
          <h2 class="sr-only">Summary</h2>
          <div class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
            <div class="flex justify-center p-10">
              <img src="{fundr?.images?.[0]}" alt='no'>
            </div>
            <div class="h-full w-full pt-15 pl-5">

              <div class="mt-1 text-base font-semibold leading-6 text-gray-900 py-3">{fundr.title}</div>
              <span aria-hidden="true" class="text-sm text-gray-600">{fundr.category}</span>

              <div id='location' class=''>
                <span class="text-sm text-gray-500 mt-3">
                  <span class=''> 
                    {fundr.country}
                  </span>{fundr.location}
                </span>
              </div>

              <div class="flex flex-row">
                  <span class="text-sm italic  text-gray-600 basis-3/4 mt-2">{fundr?.subscribers?.length ?? 0 } supporters this month</span>
              </div>
            </div>

            <div class="mt-3 border-t border-gray-900/5 px-6 py-3 ">
              <button on:click={openDonate} class='px-2 py-2 bg-[#9649cb] border-[#9649cb] text-white border rounded-xl shadow-sm hover:scale-[1.06] transition'>Support</button>
            
            </div>
            
          </div>
          
        </div>
  
        <!-- main media -->
        <div class="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
          
          <div class="mt-1">
          <!-- main media -->

          <p class="text-m font-bold">{fundr.title}</p>
          <p>My backyard is super old and on a slope, I want to landscape so my family can enjoy it. I need some finacial support.<p/>
          <img class="p-10" src="{fundr?.images?.[1]}" alt='images'>
            

          <p class="text-m font-bold pt-10"> The Goal</p>  

          I want to upgrade my planter aswell as make a path for walking. I also want to create and area where we can hangout and have a potential fire.  
          
          <p class="text-m font-bold pt-10">The Implementation</p>    
          I was able to use the funds to upgrade the planters and add a patio.

          
          <img class="p-10" src={fundr?.images?.[2]} alt=''>

           

            
          </div>
        </div>
  
        <div class="lg:col-start-3">
          <!-- Activity feed -->
          <h2 class="text-sm font-semibold leading-6 text-gray-900">Activity</h2>
          

            {#if fundr?.subscribers?.length}
              {#each fundr.subscribers as subscriber}
                <li class="relative flex gap-x-4">
                  <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                    <div class="w-px bg-gray-200"></div>
                  </div>
                  <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                  </div>
                  <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">{subscriber.signer.substring(0,4)}..{subscriber.signer.substring(37,42)}</span> Donated $400</p>
                  <time datetime="2023-01-23T11:24" class="flex-none py-0.5 text-xs leading-5 text-gray-500">6d ago</time>
                </li>
              {/each}
            {/if}
          {#if fundr?.comments?.length}      
            {#each fundr.comments as comment}
              <li class="relative flex gap-x-4">
                <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                  <div class="w-px bg-gray-200"></div>
                </div>
                <img src="https://raw.githubusercontent.com/afa7789/BlockiesVue/master/download.png" alt="" class="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50">
                
                  <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                    <div class="flex justify-between gap-x-4">
                      <div class="py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900 truncate w-8">{comment.signer.substring(0,4)}..{comment.signer.substring(37,42)}</span> commented</div>
                      <time datetime="2023-01-23T15:56" class="flex-none py-0.5 text-xs leading-5 text-gray-500">3d ago</time>
                    </div>
                    <p class="text-sm leading-6 text-gray-500">Wow! This is such a transform. Im glad you can now enjoy your backyard.</p>
                  </div>
                
                </li>
              {/each}
            {/if}
            
            <Modal bind:open={isExpanded} size="sm" outsideclose>
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
                  <span class=''>Supporting: {fundr.title}</span>
                  <span class=''>Amount: {$currencySymbol}{supportValue} {$selectedCurrency}</span>

                </div>
      

                {/if}
                <Button color="alternative" class="mr-2">Yes, I'm sure</Button>
                <Button on:click={submitTransaction} color='green'>Contribute</Button>
              </div>
            </Modal>
  
          <!-- New comment form -->
          <div class="mt-6 flex gap-x-3">
            <img src="https://raw.githubusercontent.com/afa7789/BlockiesVue/master/download.png" alt="" class="h-6 w-6 flex-none rounded-full bg-gray-50">
            <form action="#" class="relative flex-auto">
              <div class="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <label for="comment" class="sr-only">Add your comment</label>
                <textarea rows="2" name="comment" id="comment" class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..."></textarea>
              </div>
  
              <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                <div class="flex items-center space-x-5">
                  <div class="flex items-center">
                    <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                          <span class="sr-only">Attach a file</span>
                    </button>
                  </div>
                  
                </div>
                <button type="submit" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/if}
  </main>
  