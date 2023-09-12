import { academicSemesterServices } from './academicSemister.service'
import { RequestHandler } from 'express'

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body
    const result = await academicSemesterServices.createSemester(
      academicSemesterData
    )
    res.status(200).json({
      success: true,
      message: 'User created Succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const academicSemesterController = {
  createSemester,
}
