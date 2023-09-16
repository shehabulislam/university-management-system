import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { academicDepartmentServices } from './academicDepartment.service'
import { NextFunction, Request, RequestHandler, Response } from 'express'

import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'

const createDepartment: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicDepartmentData } = req.body
    const result = await academicDepartmentServices.createDepartment(
      academicDepartmentData
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department created Succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllDepartments = async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year'])
  const paginationOptions = pick(req.query, paginationFields)

  const result = await academicDepartmentServices.getAllDepartments(
    filters,
    paginationOptions
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department retrieve Successfully',
    meta: result.meta,
    data: result.data,
  })
}

const getSingleDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const result = await academicDepartmentServices.getSingleDepartment(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department retrieve Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const updatedData = req.body
    const result = await academicDepartmentServices.updateDepartment(
      id,
      updatedData
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department retrieve Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const deleteDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const result = await academicDepartmentServices.deleteDepartment(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department deleted Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const academicDepartmentController = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
}
