export const ssr = false;
import { BigNumber } from "ethers";
import { writable } from "svelte/store";
import { type FUNDR, type CurrencySymbol, type Networks, fundrs } from "../config";


import '$lib/globalState';

export const API_KEY = process.env.API_KEY
export const balanceOnBlock = writable<BigNumber>(BigNumber.from(0)); 
export const selectedFundr = writable<FUNDR>();
export const fetchedFundr = writable<FUNDR>(fundrs[0]);


export const categoryFundrExplore = writable<string>('All')
export const viewFundrModal = writable<boolean>(false)
export const selectedNetwork = writable<Networks>('Ethereum')


export const currencySymbol = writable<CurrencySymbol>('Ξ')
export const selectedCurrency = writable<'MATIC' | 'USDC' | 'ETH'>('ETH')
