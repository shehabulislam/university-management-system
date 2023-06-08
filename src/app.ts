import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()

import userRoute from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewarres/globalErrorHandler'
import ApiError from './errors/ApiError'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// Application routes
app.use('/api/v1/users', userRoute)

app.get('/', async () => {
  // next('custom error')
  Promise.reject(new Error('unHandled promise rejection'))
  // res.send('server is running')
})

app.use(globalErrorHandler)

export default app
