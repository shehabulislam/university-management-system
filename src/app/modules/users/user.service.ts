import User from './user.model'
import { IUser } from './user.interface'
import config from '../../../config'
import { generateUserId } from './user.utils'
import ApiError from '../../../errors/ApiError'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()

  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createUser = await User.create(user)

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user')
  }
  return createUser
}

export const userService = { createUser }
