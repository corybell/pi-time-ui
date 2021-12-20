const jwt = require('../jwt-helper')
const { errorResponse, successResponse } = require('../response-helper')

exports.handler = async (event) => {
  if (!event.queryStringParameters || !event.queryStringParameters.token) {
    return errorResponse(401, 'Missing qs')
  }
  
  if (!event.queryStringParameters.token) {
    return errorResponse(401, 'Missing header')
  }

  const { token } = event.queryStringParameters

  const result = jwt.verify(token)
  if (!result) {
    return errorResponse(401, `Result ${result}`)
  }

  return successResponse({ })
}
  