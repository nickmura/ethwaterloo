<script lang='ts'>
    import {
		accountChainId,
		connected,
		connectMetamask,
		connectWalletConnect,
		disconnect,
		walletAddress
	} from '$lib/auth/wallet/provider';
	import { balanceOnBlock } from '$lib/state/state';
	import { formatEther } from 'ethers/lib/utils';


	import Navbar from '$lib/components/reusable/Navbar.svelte';
	
</script>


<Navbar/>

