
export const environment = {
   production: true,
   firebaseConfig :{
    apiKey: process.env.API_KEY,
    authDomain:  process.env.AUTH_DOMAIN,
    databaseURL:  process.env.DATABASE_URL,
    projectId:  "excalibur-95b6a",
    storageBucket:  "excalibur-95b6a.appspot.com",
    messagingSenderId:  process.env.MESSAGING_SENDER_ID,
    appId:  process.env.API_ID,
    measurementId:  process.env.MEASUREMENT_ID
}
}
