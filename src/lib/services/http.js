
function errorResponse (message) {
  return {
    success: false,
    data: { message },
  }
}

function successResponse (data) {
  return {
    success: true,
    data,
  }
}

async function processResponse (response) {
  const data = await response.json()

  if (response.ok) {
    return successResponse(data)
  }

  return errorResponse(`Request failed with status: ${response.status}`)
}

export async function post (url, body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      // headers: getHeaders(token),
      body: JSON.stringify(body),
    })

    return processResponse(response)
  } catch (error) {
    return errorResponse(error.message)
  }
}
