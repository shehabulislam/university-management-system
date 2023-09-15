import { Response } from 'express'

type IApiResponse<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    total: number
  }
  data?: T | null
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  // const responseData: IApiResponse<T> = {
  //   statusCode: data.statusCode,
  //   success: data.success,
  //   meta: data.meta,
  //   data: data.data,
  // }
  // console.log(data)
  res.status(data.statusCode).json(data)
}

export default sendResponse
