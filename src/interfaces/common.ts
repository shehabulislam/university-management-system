import { IGenericErrorMessage } from './error'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}

export type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

export type IPaginationOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}
