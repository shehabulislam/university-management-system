import { Model } from 'mongoose'
export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall'
export type IAcademicSemesterCode = '01' | '02' | '03'

export type IAcademicSemester = {
  title: IAcademicSemesterTitle
  year: string
  code: IAcademicSemesterCode
  startMonth: Month
  endMonth: Month
}

export type IPaginationOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export type IAcademicSemesterFilters = {
  searchTerm?: string
}

export type AcademicSemesterModel = Model<IAcademicSemester>
