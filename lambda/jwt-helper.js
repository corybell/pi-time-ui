const jwt   = require('jsonwebtoken')

const privateKEY = `
-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCN6/I8mvhK6FPRx9gTgCcSp8uZpV/dB/hPwPBH0DWuufGGWR8A
e3Kl4BT5WfhwfRTiJBhpiDamlN++fswmTYMGLMrOqKsqcimIJYpr8IxNnoEKpVSC
uDStj1zPeDx1Z8jE7nuuy9cgZjRt62fH2TDM1BSIT2/tyOp1SDhLPvc1ZwIDAQAB
AoGAXQbB27QA+Kjc+G80VWP1OKdAL9BUy/9DZpOjbI8wAP3lMRkN1zUT62K8nM26
qZFztN/QGKyulfaTyrw2eQzpypJQ4kptjmMLmO02+9GTM7EeTAsrWiJfvXJmHYxo
V+SdYPQCnypgw3hLOubCniVPV9qJpBsjrOIOqtZXJBOK5bECQQDGV35ifJQKrqyw
eT30FDqZmtYm5sUwrm7cFmxGfNN+4Q5JXTLpFpLlVWgYy5dYPRN49DtSeQw2KI9t
Qaacf/lFAkEAty2xfIswuRAdQVEnEfC4CtvOGqxmkqIfpsZhv8JxhsJ4aNxvlGxl
c1bhlAc/v4EGNTpc6CHGr7v4D5utf32guwJAEkeOBlWk7zcaA0mpRA15OR7kDcHG
+q2Y2f/XCsgGVfM39dr5DjJeZ3Rvm5ln4WH/oW4g6YDudy9VyKP8TwAcYQJBAIcP
ILskYZNBx2A+dqEqrHgNIwTVsndRJCcyRCZANrZWsrMWPQrhdVe6am5bfew0NKCQ
XKonJTizTi4r6ZuDxDsCQA0wKLM8Y7GS5+Kiuq3LVZVhmgmlhc2pTN6IMSKOUtb7
0ti5FYqqeqZktGDDIiZ/qQ/cZ+6tdBeCJCXVAfeakQM=
-----END RSA PRIVATE KEY-----
`

const publicKEY = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCN6/I8mvhK6FPRx9gTgCcSp8uZ
pV/dB/hPwPBH0DWuufGGWR8Ae3Kl4BT5WfhwfRTiJBhpiDamlN++fswmTYMGLMrO
qKsqcimIJYpr8IxNnoEKpVSCuDStj1zPeDx1Z8jE7nuuy9cgZjRt62fH2TDM1BSI
T2/tyOp1SDhLPvc1ZwIDAQAB
-----END PUBLIC KEY-----
`

const signOptions = {
  issuer: "authorization/token",
  subject: "boo@heyashley.com", 
  audience: "heyashley.com",
  expiresIn:  "1d",
  algorithm:  "RS256"   
}
const verifyOptions = {
  issuer: "authorization/token",
  subject: "boo@heyashley.com", 
  audience: "heyashley.com",
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
