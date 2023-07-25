import { API_KEY } from '$lib/stores/state'
import { CIDString, Web3File, Web3Response, Web3Storage } from 'web3.storage'
import type { FUNDR } from '$lib/config'
import { CID } from 'web3.storage/dist/src/lib/interface';


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
//@ts-ignore
export async function storeFiles (files) {
    const token = await getAccessToken()
    const client = getClientInstance(token)
    const cid = await client.put(files)

    console.log('stored files with cid:', cid)
    return cid
  }

export async function retrieveFiles (cid:CIDString) {
    const token = await getAccessToken()
    const client = getClientInstance(token)
    const res:Web3Response|null = await client.get(cid)
    let files:Web3File[]

    if (res) {
      if (!res.ok) throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
      else {
        files = await res.files()
      }
    } else throw new Error('failed to get response with cid: null')
  
    // unpack File objects from the response
       
    
    for (const file of files) { 
      console.log(`${file.cid} -- ${file.size}`)
    }
}

export async function getData(cid:CIDString) {
    const token = await getAccessToken()
    const client = getClientInstance(cid)
    //todo

    

}
