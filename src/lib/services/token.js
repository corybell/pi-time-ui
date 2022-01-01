const key = 'PI_TIME_AUTH'

export function getToken() {
  try {
    return window.localStorage.getItem(key);    
  } catch (error) {
    return undefined
  }
}

export function setToken(token) {
  try {
    window.localStorage.setItem(key, token)
    return true    
  } catch (error) {
    return false
  }
}
