import { Schema, model } from 'mongoose'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemesterInterface'
import {
  AcademicSemesterMonths,
  academicSemesterCode,
  academicSemesterTitle,
} from './academicSemester.constant'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      required: true,
      type: String,
      enum: academicSemesterTitle,
      unique: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      required: true,
      type: String,
      enum: academicSemesterCode,
    },
    startMonth: {
      required: true,
      type: String,
      enum: AcademicSemesterMonths,
    },
    endMonth: {
      required: true,
      type: String,
      enum: AcademicSemesterMonths,
    },
  },
  { timestamps: true }
)

const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)

export default AcademicSemester
