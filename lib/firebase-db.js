const firebase = require('firebase-admin')
const {env} = process
const app = firebase.initializeApp({
  credential: firebase.credential.cert({
    type: 'service_account',
    project_id: env.FIREBASE_DB,
    private_key_id: env.FIREBASE_PRIVATE_KEY_ID,
    private_key: env.FIREBASE_PRIVATE_KEY,
    client_email: env.FIREBASE_CLIENT_EMAIL,
    client_id: env.FIREBASE_CLIENT_ID,
    auth_uri: env.FIREBASE_AUTH_URI,
    token_uri: env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: env.FIREBASE_CLIENT_X509_CERT_URL
  }),
  databaseURL: `https://${env.FIREBASE_DB}.firebaseio.com`
})
const getRef = (ref) => app.database().ref(ref)

module.exports = {
  getRef,
  push (data) {
    return getRef(data.type).update(data)
  }
}
