import { IUser } from "./user.model"

export interface ILogin {
  token : string,
  type : string,
  user : IUser
}