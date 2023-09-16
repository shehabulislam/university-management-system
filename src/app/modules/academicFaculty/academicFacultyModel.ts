import { Schema, model } from 'mongoose'
import {
  AcademicFacultyModel,
  IAcademicFaculty,
} from './academicFaculty.interface'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      unique: true,
      required: true,
      type: String,
    },
  },
  { timestamps: true }
)

// pre hook for faculty validation

academicFacultySchema.pre('save', async function (next) {
  const isExist = await AcademicFaculty.findOne({
    title: this.title,
  })
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'AcademicFaculty already exists!')
  }
  next()
})

const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  academicFacultySchema
)

export default AcademicFaculty
