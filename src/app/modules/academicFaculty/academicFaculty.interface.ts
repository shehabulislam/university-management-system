import { Model } from 'mongoose'

export type IAcademicFaculty = {
  title: string
}

export type IPaginationOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export type IAcademicFacultyFilters = {
  searchTerm?: string
}

export type AcademicFacultyModel = Model<IAcademicFaculty>
