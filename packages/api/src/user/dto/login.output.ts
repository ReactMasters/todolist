import { createUnionType, Field, ObjectType } from '@nestjs/graphql'
import { BaseError } from 'src/base/error.dto'

@ObjectType()
export class LoginSuccess {
  @Field()
  token: string
}

@ObjectType()
export class LoginError extends BaseError {}

export const LoginOutput = createUnionType({
  name: 'LoginOutput', // the name of the GraphQL union
  types: () => [LoginSuccess, LoginError],
  resolveType(value) {
    if (value.token) return LoginSuccess
    return LoginError
  },
})
