import { IAcademicFaculty } from './../academicFaculty/academicFaculty.interface'
import { Types } from 'mongoose'
import { Model } from 'mongoose'

export type IAcademicDepartment = {
  title: string
  academicFaculty: Types.ObjectId | IAcademicFaculty
}

export type IPaginationOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export type IAcademicDepartmentFilters = {
  searchTerm?: string
}

export type AcademicDepartmentModel = Model<IAcademicDepartment>
