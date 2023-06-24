<script lang='ts'>
	import { onMount } from 'svelte';
    import {
		accountChainId,
		connected,
		connectMetamask,
		connectWalletConnect,
		disconnect,
		walletAddress
	} from '$lib/stores/provider';


    
    onMount(() => {
        console.log($walletAddress)
    })
</script>g

{#if !$connected}
    <button on:click={connectMetamask} class='font-mono font-medium text-sm text-white px-2 py-2 rounded-lg bg-[#172B3A] hover:scale-[1.05] transition'>
    Sign in
    </button>
{:else}
    <button on:click={connectMetamask} class='font-mono font-medium text-sm text-white px-2 py-2 rounded-lg bg-[#172B3A] max-w-[8rem] truncate
    hover:scale-[1.05] transition'>
        {$walletAddress.substring(0,4)}..{$walletAddress.substring(37,42)}
    </button>
{/if}