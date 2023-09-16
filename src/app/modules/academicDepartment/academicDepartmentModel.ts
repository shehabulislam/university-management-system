import { Schema, model } from 'mongoose'
import {
  AcademicDepartmentModel,
  IAcademicDepartment,
} from './academicDepartment.interface'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const academicDepartmentSchema = new Schema<IAcademicDepartment>(
  {
    title: {
      unique: true,
      required: true,
      type: String,
    },
    academicFaculty: {
      // unique: true,
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// pre hook for department validation

academicDepartmentSchema.pre('save', async function (next) {
  const isExist = await AcademicDepartment.findOne({
    title: this.title,
  })
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'AcademicDepartment already exists!'
    )
  }
  next()
})

const AcademicDepartment = model<IAcademicDepartment, AcademicDepartmentModel>(
  'AcademicDepartment',
  academicDepartmentSchema
)

export default AcademicDepartment
