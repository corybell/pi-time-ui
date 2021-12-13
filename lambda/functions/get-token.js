const jwt = require('../jwt-helper')
const { errorResponse, successResponse } = require('../response-helper')

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return errorResponse(405, 'Method Not Allowed')
  }

  const params = JSON.parse(event.body);
  
  if (!params || !params.password) {
    return errorResponse(400, 'Bad Request')
  }
  
  if (params.password !== 'banana') {
    return errorResponse(400, 'Invalid password')
  }

  const token = jwt.sign({})
  
  return successResponse({ token })
}
  