import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

import globalErrorHandler from './app/middlewarres/globalErrorHandler'
import router from './app/routes'
import httpStatus from 'http-status'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1', router)

app.get('/', async () => {
  // next('custom error')
  Promise.reject(new Error('unHandled promise rejection'))
  // res.send('server is running')
})

app.use(globalErrorHandler)

// handle not found error
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
