const crypto = require('crypto')

module.exports = (key, payload) => {
  const hmac = crypto.createHmac('sha256', key)
    .update(JSON.stringify(payload))
    .digest()
  return Buffer.from(hmac).toString('base64')
}
