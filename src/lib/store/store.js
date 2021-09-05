import { writable } from "svelte/store"
import { writable as lsWritable } from 'svelte-local-storage-store'
const key = 'PI_TIME_HOST'

export const relays = writable([])
export const relayDetailId = writable(undefined)

export const hoursList = writable([])
export const hoursDict = writable({})

export const minutesList = writable([])
export const minutesDict = writable({})

export const isNavOpen = writable(false)

export const hostStore = lsWritable(key, '')
export const isHostDrawerOpen = writable(false)
