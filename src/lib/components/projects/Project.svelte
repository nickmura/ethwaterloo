<script lang='ts'>
    import { onMount } from "svelte";
    import { walletAddress } from "$lib/stores/provider";
    import {  
      projects,
      
    } from '$lib/config'



</script>




<div class="">
  <div class="mx-auto max-w-2xl px-6 py-18 sm:px-6 sm:py-24 lg:max-w-[80rem] lg:px-8 font-mono">   
    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
      {#each projects as project}
        <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:scale-[1.02] transition ">
          <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-95 sm:h-96">
            <img src="{project.images[0]}" alt="artist" class="h-full w-full object-cover object-center sm:h-full sm:w-full scale-[0.5]">
          </div>
          <div class="flex flex-1 flex-col space-y-1 p-4">
            <h3 class="text-md font-bold">{project.name}</h3>
            <span aria-hidden="true" class="text-xs text-gray-600">{project.category}</span>


            <div id='location' class=''>
              <span class="text-sm text-gray-500 mt-3">
                <span class=''> 
                  {project.country}
                </span>{project.location}
              </span>
            </div>


            <div class="flex flex-row">
                <span class="text-sm italic  text-gray-600 basis-3/4 mt-2">{project.subscribers.length} subscribers this month</span>
            </div>

            <div class='pt-5'>

              <button class='px-2 py-2 bg-[] border-[#EBEBEB] border rounded-xl shadow-sm hover:scale-[1.06] transition'>View</button>
              <button class='px-2 py-2 bg-[#ee4266] border-[#ee4266] text-white border rounded-xl shadow-sm hover:scale-[1.06] transition'>Support</button>
            </div>

          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
