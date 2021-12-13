const jwt = require('../jwt-helper')
const { errorResponse, successResponse } = require('../response-helper')

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return errorResponse(405, 'Method Not Allowed')
  }

  const params = JSON.parse(event.body);
  
  if (!params || !params.token) {
    return errorResponse(400, 'Bad Request')
  }
  
  const token = jwt.verify(params.token)
  
  return successResponse({ token })
}
  