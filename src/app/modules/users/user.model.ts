import { Model, Schema, model } from 'mongoose'
import { IUser } from './user.interface'

type IUserMethods = {
  fullName: string
}

type UserModel = Model<IUser, object, IUserMethods>

const userSchema = new Schema<IUser>(
  {
    id: {
      required: true,
      type: String,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
)

const User = model<IUser, UserModel>('User', userSchema)

export default User
