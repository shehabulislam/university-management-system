import {
  IAcademicFacultyCode,
  IAcademicFacultyTitle,
  Month,
} from './academicFaculty.interface'

export const AcademicFacultyMonths: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const academicFacultyTitle: IAcademicFacultyTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
]
export const academicFacultyCode: IAcademicFacultyCode[] = ['01', '02', '03']

export const academicFacultyCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
}
