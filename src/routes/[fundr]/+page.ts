export const prerender = false
import { FUNDR, fundrs } from '$lib/config.js';
import { fetchedFundr } from '$lib/stores/state.js';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */



export async function load({ fetch, params }) {
  let url = params.fundr



  let fundr = fundrs.find(fundr => fundr.url == url)
    
  if (fundr) {
    fetchedFundr.set(fundr)
    return fundr
  } 
  
   else if (!fundr) {
    throw error (404, 'Not found')
  }
}