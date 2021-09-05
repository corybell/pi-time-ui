import { writable } from "svelte/store"
import { writable as lsWritable } from 'svelte-local-storage-store'
const key = 'PI_TIME_HOST'

const hostStorageKeys = {
  1: 'PI_TIME_HOST_1',
  2: 'PI_TIME_HOST_2',
  3: 'PI_TIME_HOST_3',
  4: 'PI_TIME_HOST_4',
}

export const hostStore = lsWritable(key, '')
export const isHostDrawerOpen = writable(false)
