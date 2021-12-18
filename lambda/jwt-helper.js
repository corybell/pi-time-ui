const jwt   = require('jsonwebtoken')

const { PRIVATE_KEY, PUBLIC_KEY } = process.env

const signOptions = {
  issuer: "authorization/token",
  subject: "boo@pi-time.netlify.app", 
  audience: "pi-time.netlify.app",
  expiresIn:  "1d",
  algorithm:  "RS256"   
}
const verifyOptions = {
  issuer: "authorization/token",
  subject: "boo@pi-time.netlify.app", 
  audience: "pi-time.netlify.app",
  expiresIn:  "1d",
  algorithm:  ["RS256"]
}

function sign (payload) {
  return jwt.sign(payload, PRIVATE_KEY, signOptions)
}

function verify (token) {
  try {
    return jwt.verify(token, PUBLIC_KEY, verifyOptions)
  } catch (err){
    return false
  }
}

function decode (token) {
  return jwt.decode(token, {complete: true})
  //returns null if token is invalid
}

module.exports = {
  sign,
  verify,
  decode,
}
