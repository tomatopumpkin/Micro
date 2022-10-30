
var admin = require("firebase-admin");

var serviceAccount = require("./micro-user-api-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const DB = admin.firestore();

module.exports = { DB , admin }
