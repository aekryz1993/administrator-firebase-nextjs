import admin from "firebase-admin";

export async function verifyIdToken(idToken) {
  const decodedToken = await admin.auth().verifyIdToken(idToken)
  const { uid } = decodedToken
  return uid
}