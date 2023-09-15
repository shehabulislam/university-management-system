import express from 'express'

// import { createUser } from './user.controller'
import validateRequest from '../../middlewarres/validateRequest'

import {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
} from './academicSemester.validation'
import { academicSemesterController } from './academicSemister.controller'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  academicSemesterController.createSemester
)

router.get('/', academicSemesterController.getAllSemesters)

router.get('/:id', academicSemesterController.getSingleSemester)

router.patch(
  '/:id',
  validateRequest(updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester
)

router.delete('/:id', academicSemesterController.deleteSemester)

export const AcademicSemesterRoutes = router
