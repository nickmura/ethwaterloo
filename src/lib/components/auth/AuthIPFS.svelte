<script lang='ts'>
    import { onMount } from "svelte";
    import { FUNDR } from "$lib/config";
    import { getAccessToken, getClientInstance } from "$lib/stores/state";

    
    let client:any
    onMount(async () => {
        let token = await getAccessToken()
        console.log(token)
        if (token) client = await getClientInstance(token)
        if (client) console.log('OK')

    })
</script>

<main>
    check console 
</main>