export const ssr = false;
import { BigNumber } from "ethers";
import { writable } from "svelte/store";
import type { Project } from "../config";


import '$lib/globalState';
export const API='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFjZDU4ODcwZjNhNjU3RTNjMjYxMjg3ZkREM2Q5MjU1YTE3N0RDNkUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc2ODY5MzE0OTEsIm5hbWUiOiJmdW5kciJ9.YCkeXphKAQ2sHYnYVrGilrG9N8mHinRjLFSgcrynDY8'
export const balanceOnBlock = writable<BigNumber>(BigNumber.from(0)); 
export const selectedFundr = writable<Project>()


export const categoryCreatorExplore = writable<string>('All')
export const selectedCurrency = writable<'MATIC' | 'USDC' | 'ETH'>('ETH')