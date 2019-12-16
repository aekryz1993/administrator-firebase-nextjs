import * as Firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

export const firebase = Firebase.apps.length
  ? Firebase.app()
  : Firebase.initializeApp(firebaseConfig)

export const firestore = Firebase.firestore()
export const auth = Firebase.auth()
export const functions = Firebase.functions()
export const database = firebase.database();
export const storage = firebase.storage();
