import express from 'express'

// import { createUser } from './user.controller'
import validateRequest from '../../middlewarres/validateRequest'

import { createAcademicSemesterZodSchema } from './academicSemester.validation'
import { academicSemesterController } from './academicSemister.controller'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  academicSemesterController.createSemester
)

export const AcademicSemesterRoutes = router
