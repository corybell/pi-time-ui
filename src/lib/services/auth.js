import { post } from 'services/http'

const key = 'hay-design-auth'
// const { GATSBY_FUNCTIONS_URL } = process.env
const GATSBY_FUNCTIONS_URL = 'http://localhost:8888/.netlify/functions'
// const GATSBY_FUNCTIONS_URL = 'https://gifted-bassi-b4e6bf.netlify.app/.netlify/functions'

export async function isAuthorized () {
  if (typeof window !== 'undefined' && window) {
    const token = window.localStorage.getItem(key)
    if (!token) {
      return false
    }

    const response = await post(`${GATSBY_FUNCTIONS_URL}/verify-token`, { token })
    if (!response.success || !response.data.token) {
      return false
    }

    return true
  }
  return false
}

export async function authorize (password) {
  if (typeof window !== 'undefined' && window) {
    const response = await post(`${GATSBY_FUNCTIONS_URL}/get-token`, { password })
    if (!response.success || !response.data.token) {
      return false
    }

    window.localStorage.setItem(key, response.data.token)
    return true
  } 
  return false
}
