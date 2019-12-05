import { login, logout } from "../controllers/auth";

const authRouter = (router, firebase, server) => {

  router.post('/login', login(firebase))

  router.post('/logout', logout)

  return router;
}

export default authRouter