import { getToken } from './token'

function errorResponse(message) {
  return {
    success: false,
    data: { message },
  }
}

function successResponse(data) {
  return {
    success: true,
    data,
  }
}

function getHeaders() {
  const token = getToken()
  return {
    'Authorization': `Bearer ${token}`,
    "Content-Type": "application/json",
  }
}

async function processResponse (response) {
  const data = await response.json()

  if (response.ok) {
    return successResponse(data)
  }

  return errorResponse(`Request failed with status: ${response.status}`)
}

export async function get (url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: getHeaders(),
    })

    return processResponse(response)
  } catch (error) {
    return errorResponse(error.message)
  }
}

export async function post (url, body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body),
    })

    return processResponse(response)
  } catch (error) {
    return errorResponse(error.message)
  }
}

export async function put (url, body) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(body),
    })

    return processResponse(response)
  } catch (error) {
    return errorResponse(error.message)
  }
}
