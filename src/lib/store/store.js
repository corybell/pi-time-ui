import { writable } from "svelte/store"

export const activeRelays = writable([])
export const relayDetailId = writable(undefined)

export const hoursList = writable([])
export const hoursDict = writable({})

export const minutesList = writable([])
export const minutesDict = writable({})

export const isNavOpen = writable(false)

export const supportedRelays = writable([])