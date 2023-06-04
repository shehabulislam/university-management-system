import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()

import userRoute from './app/modules/users/user.route'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// Application routes
app.use('/api/v1/users', userRoute)

// app.get('')

app.get('/', (req, res) => {
  res.send('server is running')
})

export default app
