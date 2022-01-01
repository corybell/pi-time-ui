import { writable, get, derived } from "svelte/store"
import { writable as lsWritable } from "svelte-local-storage-store"

export const isEditActiveDrawerOpen = writable(false)
export const editingHostIndex = writable(undefined)
export const isEditHostDrawerOpen = derived(editingHostIndex, $editingHostIndex => $editingHostIndex !== undefined)

export const activeHostIndex = lsWritable("PI_TIME_HOST_ACTIVE", 0)
export const hostStore0 = lsWritable("PI_TIME_HOST_0", "")
export const hostStore1 = lsWritable("PI_TIME_HOST_1", "")
export const hostStore2 = lsWritable("PI_TIME_HOST_2", "")
export const hostStore3 = lsWritable("PI_TIME_HOST_3", "")

export const hostKey0 = lsWritable("PI_TIME_HOST_KEY_0", "")
export const hostKey1 = lsWritable("PI_TIME_HOST_KEY_1", "")
export const hostKey2 = lsWritable("PI_TIME_HOST_KEY_2", "")
export const hostKey3 = lsWritable("PI_TIME_HOST_KEY_3", "")

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

export const activeHostKey = derived(
  [activeHostIndex, hostKey0, hostKey1, hostKey2, hostKey3],
  ([$activeHostIndex, $hostKey0, $hostKey1, $hostKey2, $hostKey3]) => {
    if ($activeHostIndex === 0) {
      return $hostKey0
    }
    if ($activeHostIndex === 1) {
      return $hostKey1
    }
    if ($activeHostIndex === 2) {
      return $hostKey2
    }
    if ($activeHostIndex === 3) {
      return $hostKey3
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

export const getHostKey = (i) => {
  if (i === 0) {
    return get(hostKey0)
  }
  if (i === 1) {
    return get(hostKey1)
  }
  if (i === 2) {
    return get(hostKey2)
  }
  if (i === 3) {
    return get(hostKey3)
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

export const setHostKey = (i, val) => {
  if (i === 0) {
    hostKey0.set(val)
  } else if (i === 1) {
    hostKey1.set(val)
  } else if (i === 2) {
    hostKey2.set(val)
  } else if (i === 3) {
    hostKey3.set(val)
  }
}
