import { writable } from "svelte/store";
import { NETWORKS } from "$lib/config";


// export const connectMetamask = new Promise((resolve, reject) => {
//     //@ts-ignore
//     if (!window.ethereum) reject('No provider found')
//     else
//         try {
//             //@ts-ignore
//             window['ethereum'].request({method: 'eth_requestAccounts'})
            
//         } catch (error) {
//             //@ts-ignore
            
//         }
// })