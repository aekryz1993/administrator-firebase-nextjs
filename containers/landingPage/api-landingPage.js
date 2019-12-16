import { database } from "../../lib/db";

export const edit = (section, value) => {
  return new Promise((resolve, reject) => {
    try {
      database.ref(section().ref).set({
        [section().value]: value
      })
      resolve({message: 'successfully changed'})
    } catch (error) {
      reject({error: error.message})
    }
  });
}