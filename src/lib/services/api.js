import { get, put } from './http'

export async function hydrate(host) {
  if (!host) {
    return undefined
  }
  const response = await get(`${host}/hydrate`)
  if (!response.success || !response.data) {
    return undefined
  }
  return response.data
}

export async function putRelay(host, id, data) {
  if (!host) {
    return undefined
  }
  const response = await put(`${host}/relay/${id}`, data)
  if (!response.success || !response.data) {
    return undefined
  }
  return response.data
}

export async function getRelays(host) {
  if (!host) {
    return undefined
  }
  const response = await get(`${host}/relay`)
  if (!response.success || !response.data) {
    return undefined
  }
  return response.data
}
