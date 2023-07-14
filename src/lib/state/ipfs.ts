import { API_KEY } from '$lib/stores/state'
import { Web3Storage } from 'web3.storage'
import type FUNDR from '../config'


export function getAccessToken () {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    // return 'paste-your-token-here'
  
    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the
    // WEB3STORAGE_TOKEN environment variable before you run your code.
    return API_KEY;
  }

export function getClientInstance(token:string) {
    return new Web3Storage({token: token})
}

export function makeFileObjects (obj:FUNDR) {
    // You can create File objects from a Blob of binary data
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
  
    const files = [
      new File([blob], 'test.json')
    ]
    return files


  }

export async function storeFiles (files) {
    const token = await getAccessToken()
    const client = getClientInstance(token)
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }

export async function retrieveFiles (cid) {
    const token = await getAccessToken()
    const client = getClientInstance(token)
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
    }
  
    // unpack File objects from the response
    const files = await res.files()
    for (const file of files) { 
      console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
    }
}

export async function getData(cid) {
    const token = await getAccessToken()
    const client = getClientInstance()
    const res = await fetch(``)

}
