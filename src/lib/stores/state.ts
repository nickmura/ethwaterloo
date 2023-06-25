export const ssr = false;
import { BigNumber } from "ethers";
import { writable } from "svelte/store";
import type { Project } from "../config";


import '$lib/globalState';

export const balanceOnBlock = writable<BigNumber>(BigNumber.from(0)); 
export const selectedFundr = writable<Project>()


export const categoryCreatorExplore = writable<string>('All')
export const selectedCurrency = writable<'MATIC' | 'USDC' | 'ETH'>('MATIC')