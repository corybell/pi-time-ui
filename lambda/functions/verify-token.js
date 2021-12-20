const jwt = require('../jwt-helper')
const { errorResponse, successResponse } = require('../response-helper')

exports.handler = async (event) => {
  if (!event.headers || !event.headers.Authorization) {
    return errorResponse(401, 'Missing headers')
  }
  
  if (!event.headers.Authorization) {
    return errorResponse(401, 'Missing auth header')
  }

  const token = event.headers.Authorization.replace('Bearer ')

  const result = jwt.verify(token)
  if (!result) {
    return errorResponse(401, `Result ${result}`)
  }

  return successResponse({ })
}
  