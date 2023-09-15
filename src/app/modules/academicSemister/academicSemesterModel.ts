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
import ApiError from '../../../errors/ApiError'

import status from 'http-status'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      required: true,
      type: String,
      enum: academicSemesterTitle,
    },
    year: {
      type: String,
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

// pre hook for semester validation

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'AcademicSemester already exists!')
  }
  next()
})

const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)

export default AcademicSemester
