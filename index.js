require('dotenv').config()
const {json, send, sendError, createError} = require('micro')
const normalize = require('./lib/tito-normalize')
const verify = require('./lib/tito-verify')
const unauthed = createError(401, 'Unautorized')

module.exports = async function onRequest (req, res) {
  const payload = await json(req, { limit: '1mb' })
  const signature = verify(process.env.TITO_SIG, payload)
  if (req.headers['tito-signature'] !== signature) {
    return sendError(req, res, unauthed)
  }
  const user = normalize(payload)
  // make a request to firebase to store user
  send(res, 200)
}
