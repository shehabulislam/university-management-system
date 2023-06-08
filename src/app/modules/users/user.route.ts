import express from 'express'

import { createUser } from './user.controller'
import validateRequest from '../../middlewarres/validateRequest'
import { createUserZodSchema } from './user.validation'

const router = express.Router()

router.post('/register', validateRequest(createUserZodSchema), createUser)

export default router
