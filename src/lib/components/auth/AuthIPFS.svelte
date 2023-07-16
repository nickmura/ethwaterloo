<script lang='ts'>
    import { onMount } from "svelte";
    import { FUNDR, fundrs } from "$lib/config";
    import { getAccessToken, getClientInstance, makeFileObjects, retrieveFiles, storeFiles } from "$lib/state/ipfs";

    
    let client:any
    onMount(async () => {
        let token = getAccessToken()
        if (token) client = getClientInstance(token)
        let files = makeFileObjects(fundrs[0])
        let cid = await storeFiles(files)
        let retrieveData = await retrieveFiles(cid)
    })

    
</script>

<main>
    check console 
</main>