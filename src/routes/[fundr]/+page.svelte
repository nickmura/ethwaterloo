<script lang='ts'>
    import { onMount } from 'svelte' 
    import { ethers } from 'ethers'

    import type { FUNDR }  from '$lib/config'
    import { currencySymbol, selectedCurrency, selectedFundr } from '$lib/stores/state';
    import { Button, Modal } from 'flowbite-svelte'
   
    import ABI from '$lib/abis/Crowdfunding.json'

    import Fundr from "$lib/components/community/fundr/Fundr.svelte";
    import Currency from '$lib/components/reusable/Currency.svelte';


    let fundr:FUNDR
    onMount(() => {
        if ($selectedFundr) fundr = $selectedFundr
        console.log('fundr', fundr)
    })


  let isExpanded = false
  function openDonate() {
    isExpanded = !isExpanded
  }


  let supportValue = 0
  $: supportValue

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

   <Fundr/>
  
</main>
  

