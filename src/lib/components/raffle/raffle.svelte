
<script>
    import { onMount, onDestroy } from 'svelte';
  
    let countdown;
    let timeLeft = 48; // Number of seconds for the countdown
  
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
 

  
  
  
  
<div class="flex justify-center pt-32">
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

   