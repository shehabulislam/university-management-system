import { AcademicSemesterRoutes } from './../modules/academicSemister/academicSemester.route'
import express from 'express'
import userRoute from './../modules/users/user.route'
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route'

const router = express.Router()

// const moduleRoutes = [
//   {
//     path: 'users',
//     route: userRoute,
//   },
//   {
//     path: 'academic-semesters',
//     route: AcademicSemesterRoutes,
//   },
// ]

// Application routes
router.use('/users', userRoute)
router.use('/academic-semesters', AcademicSemesterRoutes)
router.use('/academic-faculties', AcademicFacultyRoutes)
router.use('/academic-departments', AcademicDepartmentRoutes)

export default router
