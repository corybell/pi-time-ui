import { writable } from 'svelte/store'

export const relays = writable([])

export const hoursList = writable([])
export const hoursDict = writable({})

export const minutesList = writable([])
export const minutesDict = writable({})

export const relayDetailId = writable(undefined)