export const prerender = false
import { fundrs } from '$lib/config.js';
import { fetchedFundr } from '$lib/stores/state.js';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */



export async function load({ fetch, params }) {
  let fundrUrl = params.fundr


  async function queryIPFS(url:string) {
    // pretend we can fetch all relevant 'FUNDRs' via get request to IPFS
    // find method on the response

    let fundr = fundrs.find(fundr => fundr.url == url)
    if (fundr) fetchedFundr.set(fundr)

  } await queryIPFS(fundrUrl)
//   if (input.includes('.trx') || input.includes('.usdd')) {
    
//     console.log(input);

//     const res = await fetch(getProfileURL + input);
    
//     if (!res.ok) throw new Error('fetch Error, null fetch');
//     profile = await res.json();

//     fetchedProfile.set(profile);
//     if (profile.img) avatarSrc.set(profile.img)
//     console.log(profile)
//   } else {
//     try {
//         // with .trx prefix
//         const res = await fetch(getProfileURL + user + '.trx')
//         if (!res.ok) throw new Error('fetch Error, null fetch')
//         profile = await res.json()
//         if (profile != undefined) {
//           fetchedProfile.set(profile)
//           if (profile.img) avatarSrc.set(profile.img)
//         } 
//         if (profile == undefined && !user.includes('.trx') && !user.includes('.usdd')) {
//           // with .usdd prefix
//           try {
//             const res = await fetch(getProfileURL + user + '.usdd')
//             if (!res.ok) throw new Error('fetch Error, null fetch')
//             profile = await res.json()
//             if (profile != undefined) {
//               fetchedProfile.set(profile)
//               if (profile.img) avatarSrc.set(profile.img)
//             }
//           } catch (error) {
//             console.log(error)
//           }
//         }
        
//         console.log(profile)
//         if (profile) {
//           return profile
//         }
        
//     } catch (error) {
//         //@ts-ignore
//         console.log(error.message)
//     }
//     throw error (404, 'not found')
}
  // if ($connectedUsername == $fetchedProfile.username || $defaultUsername == $fetchedProfile.username 
  //   || $connectedUsername == $fetchedProfile.default_username || 
  //   $defaultUsername == $fetchedProfile.default_username) {
  //     isProfile.set(true)
  // }
  //throw error(404, 'Not found');
  
