import {
  IAcademicSemesterCode,
  IAcademicSemesterTitle,
  Month,
} from './academicSemesterInterface'

export const AcademicSemesterMonths: Month[] = [
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

export const academicSemesterTitle: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
]
export const academicSemesterCode: IAcademicSemesterCode[] = ['01', '02', '03']

export const academicSemesterCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
}
