import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { academicSemesterServices } from './academicSemister.service'
import { NextFunction, Request, RequestHandler, Response } from 'express'

import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body
    const result = await academicSemesterServices.createSemester(
      academicSemesterData
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester created Succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllSemesters = async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year'])
  const paginationOptions = pick(req.query, paginationFields)

  const result = await academicSemesterServices.getAllSemesters(
    filters,
    paginationOptions
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester retrieve Successfully',
    meta: result.meta,
    data: result.data,
  })
}

const getSingleSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const result = await academicSemesterServices.getSingleSemester(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieve Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const updatedData = req.body
    const result = await academicSemesterServices.updateSemester(
      id,
      updatedData
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieve Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const deleteSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const result = await academicSemesterServices.deleteSemester(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester deleted Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const academicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
}
