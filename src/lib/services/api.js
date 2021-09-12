export async function hydrate(host) {
  if (!host) {
    return undefined
  }
  try {
    return await fetch(`${host}/hydrate`)
  } catch (error) {
    return undefined
  }
}

export async function putRelay(host, id, data) {
  if (!host) {
    return undefined
  }
  try {
    return await fetch(`${host}/relay/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    return undefined
  }
}

export async function getRelays(host) {
  if (!host) {
    return undefined
  }
  try {
    return await fetch(`${host}/relay`)
  } catch (error) {
    return undefined
  }
}
