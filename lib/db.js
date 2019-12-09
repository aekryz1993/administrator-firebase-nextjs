import React, { useState, useEffect, useContext, createContext } from "react";
import * as Firebase from "firebase/app";
import Router from "next/router";
import cookie from 'js-cookie'
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/storage';
// import 'isomorphic-unfetch'
import axios from "axios";

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
export const storage = firebase.storage();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [uploadInfo, setUploadInfo] = useState({ progress: 0, url: "" });

  // useEffect(() => {

  //   return () => {
  //     cleanup
  //   };
  // }, [input]);

  const signin = async (email, password) => {

    const loginAsAdmin = functions.httpsCallable('loginAsAdmin');

    const snapshot = await loginAsAdmin({ email: email })

    return new Promise(async (resolve, reject) => {
      if (snapshot.data) {
        try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password)
          setUser(response.user)
          // const userApi = await axios.post('/api/login', {
          //   token: response.user.refreshToken
          //   // method: 'POST',
          //   // headers: new Headers({ 'Content-Type': 'application/json' }),
          //   // credentials: 'same-origin',
          //   // body: JSON.stringify({ token: response.user.refreshToken }),
          // })
          // console.log(userApi)
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
      .then(() => axios.post('/api/logout'))
      .then(() => Router.push('/'))
      .then(() => {
        setUser(false);
      });
  };

  const uploadImage = (userId, image) => {
    if (!image || !userId) return;
    const uploadTask = storage.ref(`images/profile/${userId}/${image.name}`).put(image)

    return uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setUploadInfo({ ...uploadInfo, progress })

        console.log('Upload is ' + progress + '% done');

        // switch (snapshot.state) {
        //   case firebase.storage.TaskState.PAUSED: // or 'paused'
        //     console.log('Upload is paused');
        //     break;
        //   case firebase.storage.TaskState.RUNNING: // or 'running'
        //     console.log('Upload is running');
        //     break;
        // }
        // resolve(progress)
      },
      error => {
        // reject(error)
        console.log(error)
      },
      // () => {
      //   setTimeout(async () => {
      //     const thumbnail = await getPicProfileUrl(userId)
      //     // console.log(thumbnail)
      //     return thumbnail
      //   }, 5000)
      //   const url = await uploadTask.snapshot.ref.getDownloadURL()
      //   console.log(url)
      // }
    )
  }

  const updateProfile = (uid) => async (displayName, photoURL) => {
    const updateUserProfile = functions.httpsCallable('updateUserProfile');
    const snapshot = await updateUserProfile({uid: uid, displayName: displayName, photoURL: photoURL})
    console.log(snapshot)

    return snapshot
  }
  

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(idToken => {
          axios.post('/api/login', {
            token: idToken
          })
        })
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
    uploadImage,
    updateProfile,
  };
}
