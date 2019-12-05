import { updateUser, getUser, profilePicture, createUser } from "../controllers/users";

const usersRouter = (router, firebase, server) => {

  router.get('/user', getUser(firebase))
  router.put('/update', updateUser(firebase))
  router.post('/profilePicture', profilePicture(firebase))
  router.post('/create', createUser(firebase))

  return router;
}

export default usersRouter