import express from 'express'

// import { createUser } from './user.controller'
import validateRequest from '../../middlewarres/validateRequest'

import {
  createAcademicDepartmentZodSchema,
  updateAcademicDepartmentZodSchema,
} from './academicDepartment.validation'
import { academicDepartmentController } from './academicDepartment.controller'

const router = express.Router()

router.post(
  '/create-department',
  validateRequest(createAcademicDepartmentZodSchema),
  academicDepartmentController.createDepartment
)

router.get('/', academicDepartmentController.getAllDepartments)

router.get('/:id', academicDepartmentController.getSingleDepartment)

router.patch(
  '/:id',
  validateRequest(updateAcademicDepartmentZodSchema),
  academicDepartmentController.updateDepartment
)

router.delete('/:id', academicDepartmentController.deleteDepartment)

export const AcademicDepartmentRoutes = router
