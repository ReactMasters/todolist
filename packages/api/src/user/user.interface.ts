export interface UserAuth {
  exp: number // token expired at (epoch datetime)
  iat: number // token issued at (epoch datetime)
  iss: string // issuer
  uid: string // user id
}
