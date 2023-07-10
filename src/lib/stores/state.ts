export const ssr = false;
import { BigNumber } from "ethers";
import { writable } from "svelte/store";
import { Web3Storage } from "web3.storage";
import { type FUNDR, type CurrencySymbol, type Networks, fundrs } from "../config";


import '$lib/globalState';

export const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ4YWY4QWJBOTJhYTU1OWQzOUEwMDUyNDg0QTRFMDI5MmI3ZTZEZWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODg3Njc5OTU5NDgsIm5hbWUiOiJmdW5kci1nIn0.rgCHsG_iqdul_rTYAA1ZCofl1KsUQBveLL_Jmtd8PYk'
export const balanceOnBlock = writable<BigNumber>(BigNumber.from(0)); 



export const selectedFundr = writable<FUNDR>();



export const createdFundr = writable<FUNDR>()


export const fetchedFundr = writable<FUNDR>(fundrs[0]);


export const categoryFundrExplore = writable<string>('All')
export const viewFundrModal = writable<boolean>(false)
export const selectedNetwork = writable<Networks>('Ethereum')


export const currencySymbol = writable<CurrencySymbol>('Ξ')
export const selectedCurrency = writable<'MATIC' | 'USDC' | 'ETH'>('ETH')



