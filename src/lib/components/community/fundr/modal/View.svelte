<script lang='ts'>
    import { Modal } from "flowbite-svelte";
    import { selectedFundr, viewFundrModal } from "$lib/stores/state";
    import { goto } from "$app/navigation";

    function expandFundr(url:string) {
      //@ts-ignore
      goto(`/${url}`);
    }
    
</script>

{#if $viewFundrModal && $selectedFundr}
  <div class=''>
    <Modal title={$selectedFundr.title} bind:open={$viewFundrModal}>
      <div class=''>
        {$selectedFundr.description}
      </div>

      <div class='mt-2 flex justify-center '>
        <button on:click={(e)=>expandFundr($selectedFundr.url)} class='items-center rounded-md bg-[#9649cb] hover:bg-[#3AB800] px-3 py-2 text-sm font-semibold text-white shadow-sm
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-[1.05] transition'>Expand</button>
      </div>
    </Modal>
  </div>
{/if}