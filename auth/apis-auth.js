import cookie from 'js-cookie'
import axios from "axios";
import { functions, firebase } from "../lib/db";

// ******************* Login ***************************
export const login = async (email, password) => {
  const loginAsAdmin = functions.httpsCallable('loginAsAdmin')
  const snapshot = await loginAsAdmin({ email: email })


  return new Promise(async (resolve, reject) => {
    try {
      if (snapshot.data) {
        try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password)

          cookie.set('token_id', response.user.refreshToken)

          resolve({ message: 'successful login' })
        } catch (error) {
          reject({ message: error.message })
        }
      }
    } catch (error) {
      reject({ message: error.message })
    }
  });
}

// ******************* Assign & check session ***************************
export const assignCheckSession = () => firebase.auth().onAuthStateChanged(user => {
  if (user) {
    return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(idToken => {
      return axios.post('/api/login', {
        token: idToken
      })
    })
  }
  return
})

// ******************* Logout ***************************
export const logout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await firebase.auth().signOut()
      await cookie.remove('token_id')
      await axios.post('/api/logout')
      resolve({ message: 'Successful logout' })
    } catch (error) {
      reject({ message: 'Failed logout' })
    }
  });
}