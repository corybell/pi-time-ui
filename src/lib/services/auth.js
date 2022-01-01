import { post } from './http'
import { setToken, getToken } from './token'

const FUNCTIONS_HOST = 'https://pi-time.netlify.app/.netlify/functions'

export async function isAuthorized () {
  if (!getToken()) {
    return false
  }
  return true
}

export async function authorize (password) {
  const response = await post(`${FUNCTIONS_HOST}/get-token`, { password })
  if (!response.success || !response.data.token) {
    return false
  }

  return setToken(response.data.token)
}
