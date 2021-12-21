const jwt = require('../jwt-helper')
const { errorResponse, successResponse } = require('../response-helper')

exports.handler = async (event) => {
  if (!event.headers) {
    return errorResponse(401, 'Missing headers')
  }

  if (!event.headers.authorization) {
    return errorResponse(401, 'Missing auth header')
  }

  const token = event.headers.authorization.replace('Bearer ', '')
  console.log('TOKEN', token)
  const result = jwt.verify(token)
  console.log('RESULT', result)
  if (!result) {
    return errorResponse(401, 'Invalid token')
  }

  return successResponse({ })
}
  