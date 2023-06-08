import { RequestHandler } from 'express'

import * as userService from './user.service'
import { z } from 'zod'

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await userService.createUser(req.body)
    res.status(200).json({
      success: true,
      message: 'User created Succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
