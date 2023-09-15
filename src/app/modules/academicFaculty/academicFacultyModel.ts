import { Schema, model } from 'mongoose'
import {
  AcademicFacultyModel,
  IAcademicFaculty,
} from './academicFaculty.interface'

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
)

// pre hook for faculty validation

// academicFacultySchema.pre('save', async function (next) {
//   const isExist = await AcademicFaculty.findOne({
//     title: this.title,
//     year: this.year,
//   })
//   if (isExist) {
//     throw new ApiError(status.CONFLICT, 'AcademicFaculty already exists!')
//   }
//   next()
// })

const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  academicFacultySchema
)

export default AcademicFaculty
