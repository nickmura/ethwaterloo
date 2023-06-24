export type Network = {
  chainId: number,
  rpcUrl: string,
  chainName: String,
  nativeCurrency: { name: string, symbol: string, decimals: number },
  multicall2Address: string, // (Allows you to call multiple view & pure functions off-chain in a single RPC call
  blockExplorerUrl?: string
}

type ExploreNavbar = 'Events' | 'Creators' | 'Community' | 'Orgs'


export interface Value {
  contract: string | null
  txid: string
  amount: number
  
}
export interface Subscriber {
  address: string,
  chainid: string,
  value: Value[] | null
}
export interface Project {
  name: string,
  category: ExploreNavbar
  timeStarted: number // block time stamps, or a ContractBlockStamps[] for multiple chains
  signers: string[]
  totalValue: number
  subscribers: Subscriber[]

}


export const projects = [
  {
    name: 'ETHParis Poker Tournament',
    country: 'France',
    location: 'Paris',
    images: ['https://pbs.twimg.com/profile_images/1524436306205589510/CssJu0MT_400x400.jpg'],
    category: 'Events',
    signers: [],
    totalValue: 1558,
    subscribers: [{address: '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2', chainid: 0xaa36a7, value: { contract: null, amount: 50000000000, txid: null }}],
    

  }
]

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
