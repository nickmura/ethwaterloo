<script lang='ts'>
    import { onMount } from "svelte";
    import { FUNDR, fundrs } from "$lib/config";
    import { getAccessToken, getClientInstance, makeFileObjects, storeFiles } from "$lib/state/ipfs";

    
    let client:any
    onMount(async () => {
        let token = await getAccessToken()
        console.log(token)
        if (token) client = await getClientInstance(token)
        let files = makeFileObjects(fundrs[0])
        let cid = await storeFiles(files)
        // console output: `stored files with cid: bafybeidiivvkezkrk7jdwitrzqfyzneitofy6nwmv2ncz33gxc76d5rkti`
    })
</script>

<main>
    check console 
</main>