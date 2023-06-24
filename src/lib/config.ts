export type Network = {
  chainId: number,
  rpcUrl: string,
  chainName: String,
  nativeCurrency: { name: string, symbol: string, decimals: number },
  multicall2Address: string, // (Allows you to call multiple view & pure functions off-chain in a single RPC call
  blockExplorerUrl?: string
}

export const NETWORKS: Network[] = [
  {
    chainId: 1,
    rpcUrl: 'https://rpc.ankr.com/eth', // Enter your RPC endpoint here.
    chainName: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    multicall2Address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696', // Address to Uniswap Multicall2 Contract
    blockExplorerUrl: 'https://etherscan.com'
  },
  // {
  //   chainId: 31337,
  //   rpcUrl: 'http://localhost:8545',
  //   chainName: 'Hardhat',
  //   nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   multicall2Address: ''
  // }
]

export interface Project {
  name: string, // Name of the project. (Metadata)
  images: string[], // Images added to the project by user, on our S3 bucket. (Metadata)
  category: 'Creators' | 'Events' | 'Orgs' | 'Communities' | 'Non-profit' // Category of independent (for our sake to categorize content) (Metadata)
  owners: string[]
  profession: string, // Self described profession (Metadata)
  minimum: number | boolean
  tags: string[]
  goal: number, // Self described or goal of raised capital. (Prob gonna be deprecated, or made metadata) (Non-Metadata)
  totalValue: string | number, // Refers to how many different addresses OR seperate transaction calls are on this contract (Non-metadata)
  donations: string | number, // Refers to how much totalValue or public funding has been put into the contract (Non-metadata)
  supporters: string | number // Refers to how many addresses / payments have supported a project
  country: string, // This is for our sake in styling from their self described region, to add a fancy emoji via the JSON. (add to issues) (Non-metadata (needs algorithm))
  location: string, // Self described region. (Metadata)
  timeLeft: string, // Optional parameter for fundraising and event contracts (Metadata)
  creationDate: string, // Date of contract deploy (Non-metadata)
}

//Refer to type Project comments for each parameter.
export const projects:Project[] = [

  {
   name: 'ETHWaterloo Poker Tournament',
   images: ["https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/000/864/329/datas/original.png" , "" ], 
   category: 'Events',
   tags: [],
   owners: [],
   profession: 'Crypto conference event',
   goal: 0,
   minimum: 0.1,
   totalValue: 3.1,
   supporters: '31',
   donations: 3,
   country: '🇨🇦',
   location: 'Waterloo, Ontario',
   timeLeft: '10d',
   creationDate: '2023-06-12'
  },
 
  // { 
  //  name: 'Dreamin Young',
  //  images: ["https:cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMjExOTgxOC9pbWFnZS8xNjYxNzkzNjY0LzNDQTYyQ0JGLTIxMkUtNDY3Ny1BRjZCLTNCMzU4RTI3MEZBQi5wbmciLCJ0aW1lc3RhbXAiOm51bGwsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjE2MCwiaGVpZ2h0IjoxNjB9fX0=?t=1661793664255" ],  
  //  category: 'Creators',
  //  tags: [],
  //  profession: 'Music producer',
  //  goal: 0,
  //  totalValue: '18',
  //  donations: 1,
  //  country: '🇨🇦',
  //  location: 'Canada',
  //  timeLeft: '30d',
  //  creationDate: '2023-06-12' 
  // } 
]
