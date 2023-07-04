

export type Network = {
	chainId: number;
	rpcUrl: string;
	chainName: String;
	nativeCurrency: { name: string; symbol: string; decimals: number };
	multicall2Address: string; // (Allows you to call multiple view & pure functions off-chain in a single RPC call
	blockExplorerUrl?: string;
};
export type Networks = 'Ethereum' | 'ZetaChain' | 'Cardano'

export type ExploreNavbar = 'Events' | 'Creators' | 'Community' | 'Orgs';

export type CurrencySymbol = 'Ξ' | '$' | '€';

export interface Value {
	contract: Contract | null;
	txid: string | null;
	amount: number;
}
export interface Contract {
	address: string
	chain: string
}
export interface CommentMessage {
	signer: string;
	message: string;
}
export interface Subscriber {
	signer: string;
	chainid: number;
	value: Value | null;
}
export interface Project {
	name: string
	category: string
	images: string[]
	signers: string[]
	country: string
	location: string
	goal: number
	totalValue: number | string
	subscribers: Subscriber[]
	comments: CommentMessage[]
}

export interface FUNDR {
	title: string

	category: string
	profession: string

	country: string
	location: string
	
	images: string[]

	goal: number

	contract: Contract[] | null
	totalValue: number | string
	

	subscribers: Subscriber[]
	comments: CommentMessage[]
	description: string

	minimum: number
	maximum: number
}


export const fundrs:FUNDR[] = [
	{
		title: 'ETHParis Poker Tournament',

		country: '🇫🇷',
		location: 'Paris',

		category: 'Events',
		profession: 'Cryptocurrency event',

		images: [
			'https://pbs.twimg.com/profile_images/1524436306205589510/CssJu0MT_400x400.jpg',
		],

		goal: 0,

		contract: null,
		totalValue: 0.6,


		subscribers: [
			{
				signer: '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2',
				chainid: 0xaa36a7,
				value: { contract: null, amount: 50000000000, txid: null },
			},
		],
		comments: [
			{
				signer: '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2',
				message: 'imma win',
			},
		],

		description: `Play poker with us! Attendees can deposit 0.1 of ETH on the network`,

		minimum: 0.1,
		maximum: 0.1,
	}
]
export const projects = [
	{
		name: 'ETHParis Poker Tournament',
		country: '🇫🇷',
		location: 'Paris',
		profession: 'Cryptocurrency event',
		images: [
			'https://pbs.twimg.com/profile_images/1524436306205589510/CssJu0MT_400x400.jpg',
		],
		goal: 0,
		category: 'Events',
		minimum: 0.1,
		signers: [],
		totalValue: 2378,
		subscribers: [
			{
				address: '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2',
				chainid: 0xaa36a7,
				value: { contract: null, amount: 50000000000, txid: null },
			},
		],
		comments: [
			{
				address: '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2',
				message: 'imma win',
			},
		],
	},
	{
		name: 'Help Me Landscape My Backyard',
		images: [
			'https://preview.redd.it/zpq6kcl66wn61.jpg?width=3648&format=pjpg&auto=webp&v=enabled&s=fbb0143076ef39b275cabef3f6ec7662a28cd3c7',
			'https://preview.redd.it/a7bkx4k56wn61.jpg?width=5312&format=pjpg&auto=webp&v=enabled&s=d6120ba088047d7be5ce23dfec341b900d3afa35',
			'https://preview.redd.it/7s21gtr66wn61.jpg?width=4608&format=pjpg&auto=webp&v=enabled&s=b82f31b4fab41cdb2593bfaefa5ca43d09eef5a5',
			'https://preview.redd.it/2g8kuru56wn61.jpg?width=5312&format=pjpg&auto=webp&v=enabled&s=18c4172e26d0e369e60a053106f21d7b8303b76b',
		],
		category: 'Non-profits',
		tags: [],
		signers: [],
		profession: 'Landscaping',
		goal: 1000,
		minimum: 0,
		totalValue: '18',
		subscribers: [
			{
				address: '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2',
				chainid: 0xaa36a7,
				value: { contract: null, amount: 0.1, txid: null },
			},
			{
				address: '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2',
				chainid: 0xaa36a7,
				value: { contract: null, amount: 0.1, txid: null },
			},
		],
		donations: 5,
		comments: [
			{
				address: '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2',
				message: 'imma win',
			},
		],

		country: '🇨🇦',
		location: 'London',
		timeLeft: '30d',
	},
];

export const NETWORKS: Network[] = [
	{
		chainId: 1,
		rpcUrl: 'https://rpc.ankr.com/eth', // Enter your RPC endpoint here.
		chainName: 'Ethereum',
		nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
		multicall2Address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696', // Address to Uniswap Multicall2 Contract
		blockExplorerUrl: 'https://etherscan.com',
	},
	// {
	//   chainId: 31337,
	//   rpcUrl: 'http://localhost:8545',
	//   chainName: 'Hardhat',
	//   nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
	//   multicall2Address: ''
	// }
];

// export interface Project {
//   name: string, // Name of the project. (Metadata)
//   images: string[], // Images added to the project by user, on our S3 bucket. (Metadata)
//   category: 'Creators' | 'Events' | 'Orgs' | 'Communities' | 'Non-profit' // Category of independent (for our sake to categorize content) (Metadata)
//   owners: string[]
//   profession: string, // Self described profession (Metadata)
//   minimum: number | boolean
//   tags: string[]
//   goal: number, // Self described or goal of raised capital. (Prob gonna be deprecated, or made metadata) (Non-Metadata)
//   totalValue: string | number, // Refers to how many different addresses OR seperate transaction calls are on this contract (Non-metadata)
//   donations: string | number, // Refers to how much totalValue or public funding has been put into the contract (Non-metadata)
//   supporters: string | number // Refers to how many addresses / payments have supported a project
//   country: string, // This is for our sake in styling from their self described region, to add a fancy emoji via the JSON. (add to issues) (Non-metadata (needs algorithm))
//   location: string, // Self described region. (Metadata)
//   timeLeft: string, // Optional parameter for fundraising and event contracts (Metadata)
//   creationDate: string, // Date of contract deploy (Non-metadata)
// }

//Refer to type Project comments for each parameter.
