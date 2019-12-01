import React, { useState, useEffect, useContext, createContext } from "react";
import * as Firebase from "firebase/app";
import Router from "next/router";
import cookie from 'js-cookie'
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';

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

const firestore = Firebase.firestore()
const auth = Firebase.auth()
const functions = Firebase.functions()
const database = firebase.database();
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = async (email, password) => {

    const loginAsAdmin = functions.httpsCallable('loginAsAdmin');

    const snapshot = await loginAsAdmin({ email: email })

    return new Promise(async (resolve, reject) => {
      if (snapshot.data) {
        try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password)
          setUser(response.user)
          cookie.set('token', response.user.refreshToken)
          resolve('successful login')
        } catch (error) {
          reject('failed login')
        }
      } else {
        reject('failed login')
      }
    })
    // loginAsAdmin({ email: email }).then(snapshot => {
    //   if (snapshot.data.admin) {
    //     return firebase
    //       .auth()
    //       .signInWithEmailAndPassword(email, password)
    //       .then(response => {
    //         setUser(response.user);
    //         Router.push('/dashboard/profile')
    //         cookie.set('token', response.user.refreshToken)
    //       })
    //       // .then(() => Router.push('/dashboard/profile'))
    //       // .then(() => console.log('rrrrrrrr'))
    //       // Router.push('/dashboard/profile')
    //       .catch((error) => error.message)
    //   } else {
    //     return 'Somthing went wrong'
    //   }
    // })
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => cookie.remove('token'))
      .then(() => Router.push('/'))
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    firestore,
    user,
    signin,
    // signup,
    signout,
  };
}

// useProvideAuth.getInitialProps = async ({ req, res }) => {
//   res.user = {}
//   const userAgent = req ? console.log('auth.currentUser') : 'console.log(auth.currentUser)'
//   return { userAgent }
// }
