import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { academicFacultyServices } from './academicFaculty.service'
import { NextFunction, Request, RequestHandler, Response } from 'express'

import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'

const createFaculty: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicFacultyData } = req.body
    const result = await academicFacultyServices.createFaculty(
      academicFacultyData
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty created Succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllFaculties = async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year'])
  const paginationOptions = pick(req.query, paginationFields)

  const result = await academicFacultyServices.getAllFaculties(
    filters,
    paginationOptions
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty retrieve Successfully',
    meta: result.meta,
    data: result.data,
  })
}

const getSingleFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const result = await academicFacultyServices.getSingleFaculty(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty retrieve Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const updatedData = req.body
    const result = await academicFacultyServices.updateFaculty(id, updatedData)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty retrieve Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const deleteFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const result = await academicFacultyServices.deleteFaculty(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty deleted Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const academicFacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
}
