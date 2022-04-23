import { createUnionType, Field, ObjectType } from '@nestjs/graphql'

import { BaseError } from 'src/base/error.dto'

@ObjectType()
export class SigninSuccess {
  @Field()
  token: string
}

@ObjectType()
export class SigninError extends BaseError {}

export const SigninOutput = createUnionType({
  name: 'SigninOutput', // the name of the GraphQL union
  types: () => [SigninSuccess, SigninError],
  resolveType(value) {
    if (value.token) return SigninSuccess
    return SigninError
  },
})
