import { Request } from 'express'
import { User } from 'src/user/entities/user.entity'
export interface UserAuth {
  exp: number // token expired at (epoch datetime)
  iat: number // token issued at (epoch datetime)
  iss: string // issuer
  uid: string // user id
}

type AppRequest = Request & {
  user?: User
}
export interface AppContext {
  req: AppRequest
}
