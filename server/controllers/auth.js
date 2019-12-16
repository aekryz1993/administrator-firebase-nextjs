
export const login = (firebase) => (req, res) => {
  if (!req.body) return res.sendStatus(400)
  const token = req.body.token
  const authUser = req.body.authUser
  firebase
    .auth()
    .verifyIdToken(token)
    .then(() => {
      return req.session.decodedToken = authUser
    })
    .then(() => res.redirect('/dashboard/profile' ))
    .catch(error => res.json({ error: error.message }))
}

export const logout = (req, res) => {
  req.session.decodedToken = null
  req.user = null

  req.session.destroy(err => {
    if (err) {
      console.log(err)
    } else {
      return res.redirect('/' )
    }
  })
}