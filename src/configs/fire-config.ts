// config/fire-config.js
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyByM1yb3n80zJ3UhirSGBBUBS1qSdCtsns',
  authDomain: 'romano-saitas.firebaseapp.com',
  databaseURL: 'https://romano-saitas.firebaseio.com',
  projectId: 'romano-saitas',
  storageBucket: 'romano-saitas.appspot.com',
  messagingSenderId: '442423061996',
  appId: '1:442423061996:web:0b261119f863c7451524c9',
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase
export default fire
