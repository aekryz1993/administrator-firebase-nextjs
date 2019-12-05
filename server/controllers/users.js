export const getUser = (firebase) => (req, res) => {
  const { body } = req

  firebase.auth().getUser(body.uid)
    .then(userRecord => {
      console.log(userRecord.toJSON())
      res.json({ user: userRecord.toJSON() })
    })
    .catch(err => console.log(err))
}

export const updateUser = (firebase) => (req, res) => {
  const { body } = req

  firebase.auth().updateUser(body.uid, {
    email: body.email,
    displayName: body.displayName
  }).then(userRecord => {
    res.json({ message: 'Successfully updated user' })
  }).catch(err => console.log(err))
}

export const profilePicture = (firebase) => (req, res) => {
  const { body } = req

  firebase.auth().updateUser(body.uid, {
    photoURL: body.photoURL,
  }).then(userRecord => {
    res.json({ message: 'Successfully updated profile picture' })
  }).catch(err => console.log(err))
}

export const createUser = (firebase) => (req, res) => {
  const { body } = req

  firebase.auth().createUser(body.uid, {
    email: body.email,
    emailVerified: body.emailVerified,
    phoneNumber: body.phoneNumber,
    password: body.password,
    displayName: body.displayName,
    photoURL: body.photoURL,
    disabled: body.disabled
  }).then(userRecord => {
    res.json({ message: 'Successfully updated profile picture' })
  }).catch(err => console.log(err))
}