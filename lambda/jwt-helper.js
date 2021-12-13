const jwt   = require('jsonwebtoken')

const privateKEY = `
fill this in
`

const publicKEY = `
fill this in
`

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
  return jwt.sign(payload, privateKEY, signOptions)
}

function verify (token) {
  try {
    return jwt.verify(token, publicKEY, verifyOptions)
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
