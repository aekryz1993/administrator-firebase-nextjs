export const login = (firebase) => (req, res) => {
  if (!req.body) return res.sendStatus(400)
  const token = req.body.token

  firebase
    .auth()
    .verifyIdToken(token)
    .then(decodedToken => {
      req.session.decodedToken = decodedToken
      return decodedToken
    })
    .then(decodedToken => res.json({ status: true, decodedToken }))
    .catch(error => res.json({ error: error.message }))
}

export const logout = (req, res) => {
  req.session.decodedToken = null
  req.user = null

  return req.session.destroy(err => {
    if (err) {
      console.log(err)
    } else {
      return res.json({ status: true })
    }
  })
}