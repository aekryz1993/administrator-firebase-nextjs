import next from "next"; 
import express from "express"; 
import bodyParser from "body-parser"; 
import admin from "firebase-admin";
import cors from "cors"; 
import apiRouter from "./routes";

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const firebase = admin.initializeApp(
  {
    credential: admin.credential.cert(require('../credentials/serviceAccountCredentials.json')),
    databaseURL: "https://digital-proton-255319.firebaseio.com"
  },
  'server'
)

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(cors())

  server.use('/api', apiRouter(firebase, server));

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
