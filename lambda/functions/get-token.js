const jwt = require('../jwt-helper')
const { errorResponse, successResponse } = require('../response-helper')

const { API_KEYS } = process.env
const parsedApiKeys = JSON.parse(API_KEYS)

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return errorResponse(405, 'Method Not Allowed')
  }

  const params = JSON.parse(event.body);
  
  if (!params || !params.password) {
    return errorResponse(400, 'Bad Request')
  }
  
  if (!parsedApiKeys.includes(params.password)) {
    return errorResponse(400, 'Invalid password')
  }

  const token = jwt.sign({})
  
  return successResponse({ token })
}
  