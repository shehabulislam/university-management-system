import { Request, Response } from 'express'

import * as userService from './user.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUser(req.body)
    res.status(200).json({
      success: true,
      message: 'User created Succesfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}
