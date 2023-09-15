import express from 'express'

// import { createUser } from './user.controller'
import validateRequest from '../../middlewarres/validateRequest'

import {
  createAcademicFacultyZodSchema,
  updateAcademicFacultyZodSchema,
} from './academicFaculty.validation'
import { academicFacultyController } from './academicFaculty.controller'

const router = express.Router()

router.post(
  '/create-faculty',
  validateRequest(createAcademicFacultyZodSchema),
  academicFacultyController.createFaculty
)

router.get('/', academicFacultyController.getAllFaculties)

router.get('/:id', academicFacultyController.getSingleFaculty)

router.patch(
  '/:id',
  validateRequest(updateAcademicFacultyZodSchema),
  academicFacultyController.updateFaculty
)

router.delete('/:id', academicFacultyController.deleteFaculty)

export const AcademicFacultyRoutes = router
