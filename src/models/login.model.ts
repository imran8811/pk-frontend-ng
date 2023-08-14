import { IUser } from "./user.model"

export interface ILogin {
  token : string,
  type : string,
  data : IUser
  message: string,
  status: string
}