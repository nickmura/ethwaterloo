
<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    let countdown: any;
    let timeLeft:number = 48; // Number of seconds for the countdown
  
    onMount(() => {
      countdown = setInterval(() => {
        timeLeft--;
        if (timeLeft === 0) {
          clearInterval(countdown);
          
        }
      }, 1000);
    });
  
    onDestroy(() => {
      clearInterval(countdown);
    });
  </script>
 

  
  
  
  


   
<div class="bg-gray-50">
    <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">We want to give back to users who support others.</h2>
            <p class="mt-4 text-gray-500">All winners will be directly deposited to and announced at the end of each raffle </p>
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 items-center">

            <div class="flex justify-center py-4">
                <div class="">
                    <h1 class="text-2xl">Raffle Prize</h1>
                    <h1 class="text-7xl"> Pot of <span class="font-semibold text-8xl">$5480</span> </h1>
                    {#if timeLeft > 0}
                      <h2 class="text-xl pt-8 pl-4">Countdown: {timeLeft}</h2>
                    {:else}
                      <h2>Time's up!</h2>
                    {/if}
                  </div>
            
            </div>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div class="sm:flex lg:block">
            <div class="sm:flex-shrink-0">
              <img class="h-16 w-16" src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg" alt="">
            </div>
            <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 class="text-sm font-medium text-gray-900">Prize delivery</h3>
              <p class="mt-2 text-sm text-gray-500">When the count down ends, any eligible users of Fundr will automaticaly be entered for a chance to will the raffle.</p>
            </div>
          </div>
          <div class="sm:flex lg:block">
            <div class="sm:flex-shrink-0">
              <img class="h-16 w-16" src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg" alt="">
            </div>
            <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 class="text-sm font-medium text-gray-900">Eligiblity</h3>
              <p class="mt-2 text-sm text-gray-500">Only users who have been verified through <span class="text-black font-semibold"> WorldCoin </span> are eligible to participate</p>
            </div>
          </div>
          <div class="sm:flex lg:block">
            <div class="sm:flex-shrink-0">
              <img class="h-16 w-16" src="https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg" alt="">
            </div>
            <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 class="text-sm font-medium text-gray-900">Supply</h3>
              <p class="mt-2 text-sm text-gray-500">The funds for this raffle are supplied by users of Fundr. Anytime users support, a small portion is taken and added to this raffle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  