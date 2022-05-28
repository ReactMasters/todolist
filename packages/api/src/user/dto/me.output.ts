import { createUnionType, Field, ObjectType } from '@nestjs/graphql'

import { BaseError } from 'src/base/error.dto'

import { User } from '../entities/user.entity'

@ObjectType()
export class MeSuccess {
  @Field()
  user: User
}

@ObjectType()
export class MeError extends BaseError {}

export const MeOutput = createUnionType({
  name: 'MeOutput',
  types: () => [MeSuccess, MeError],
  resolveType(value) {
    if (value.user) return MeSuccess
    return MeError
  },
})
