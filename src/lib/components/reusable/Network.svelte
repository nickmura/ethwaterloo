<script>
    import { onMount } from 'svelte';


  
    let isExpanded = false
    function expandNetworks() {
        isExpanded = !isExpanded
    }



</script>


<div class='min-w-[120px] relative '>
    <button on:click={expandNetworks} class=' w-full px-2 py-1.5 
    border rounded-lg border-[#DDDBE6] text-white flex flex-wrap gap-2 font-bold justify-between items-center'>
        <div class="flex gap-2 items-center">
            <img src='/symbols/eth.svg' class='w-5 h-5 mt-0.5' alt='tron-logo'/>
            <span>ETH</span>
        </div>
        <img src='/carrot.svg' class='w-3 h-3' alt='carrot'/>
    </button>
    {#if isExpanded}
        <div class='animate-fade-in-up absolute flex w-full flex-column 
        border border-[#dddBe6] rounded-lg flex-wrap bg-[#F5F5F5] dark:bg-[#16161d] mt-2 dark:text-white'>
            <div class='flex w-full gap-2 font-bold rounded-lg'>
                <ul class="w-full">
                    
                    <li class="border-b border-[#dddBe6] w-full ">
                        <button on:click={expandNetworks} class='w-full'>
                            <span class="transition flex gap-2 px-2 py-2 cursor-pointer justify-between">
                                <div class='flex-wrap flex gap-2 items-center'>
                                    <img src='/symbols/eth.svg' class='w-5 h-5 items-center' alt='fdsffffsd'/>
                                    <span>ETH</span>
                                </div>
                            </span>
                        </button>
                    </li>

                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={expandNetworks} class="border-b border-[#dddBe6] w-full hover:cursor-not-allowed opacity-50">
                        <span class="flex gap-2 px-2 py-2 cursor-pointer items-center">
                            <img src='/symbols/ada.svg' class='w-5 h-5 mt-0.5' alt=''/>
                            <span>ADA</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    {/if}
</div>

<style>

    @keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: translateY(10px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
    }

        .animate-fade-in-up {
    animation: fade-in-up .5s ease-out
    }

    @keyframes fade-in-down {
    0% {
        opacity: 0;
        transform: translateY(-10px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
    }

    /* .animate-fade-in-down {
    animation: fade-in-down .5s ease-out
    } */
</style>