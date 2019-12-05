import express from 'express';
import session from 'express-session';
const FileStore = require('session-file-store')(session)
// const FirestoreStore = require('connect-session-firestore')(session);
import authRouter from "./auth";
import usersRouter from "./users";

const router = express.Router();

const apiRouter = (firebase, server) => {

  server.use(
    session({
      secret: 'geheimnis',
      saveUninitialized: true,
      store: new FileStore({secret: 'geheimnis'}),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 }, // week
    })
  )

  server.use((req, res, next) => {
    req.firebaseServer = firebase
    next()
  })

  router.use('/auth', authRouter(router, firebase, server))
  router.use('/users', usersRouter(router, firebase, server))

  return router;
}

export default apiRouter;