import { writable, get, derived } from "svelte/store"
import { writable as lsWritable } from "svelte-local-storage-store"

export const isEditActiveDrawerOpen = writable(false)
export const editingHostIndex = writable(undefined)

export const activeHostIndex = lsWritable("PI_TIME_HOST_ACTIVE", 0)
export const hostStore0 = lsWritable("PI_TIME_HOST_0", "")
export const hostStore1 = lsWritable("PI_TIME_HOST_1", "")
export const hostStore2 = lsWritable("PI_TIME_HOST_2", "")
export const hostStore3 = lsWritable("PI_TIME_HOST_3", "")

export const activeHostName = derived(
  [activeHostIndex, hostStore0, hostStore1, hostStore2, hostStore3],
  ([$activeHostIndex, $hostStore0, $hostStore1, $hostStore2, $hostStore3]) => {
    if ($activeHostIndex === 0) {
      return $hostStore0
    }
    if ($activeHostIndex === 1) {
      return $hostStore1
    }
    if ($activeHostIndex === 2) {
      return $hostStore2
    }
    if ($activeHostIndex === 3) {
      return $hostStore3
    }
  }
)

export const getHostStore = (i) => {
  if (i === 0) {
    return get(hostStore0)
  }
  if (i === 1) {
    return get(hostStore1)
  }
  if (i === 2) {
    return get(hostStore2)
  }
  if (i === 3) {
    return get(hostStore3)
  }
}

export const setHostStore = (i, val) => {
  if (i === 0) {
    hostStore0.set(val)
  } else if (i === 1) {
    hostStore1.set(val)
  } else if (i === 2) {
    hostStore2.set(val)
  } else if (i === 3) {
    hostStore3.set(val)
  }
}
