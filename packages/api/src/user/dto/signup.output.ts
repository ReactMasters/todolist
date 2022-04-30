import { createUnionType, Field, ObjectType } from '@nestjs/graphql'

import { BaseError } from 'src/base/error.dto'
import { TodoList } from 'src/todo-list/entities/todo-list.entity'

import { User } from '../entities/user.entity'

@ObjectType()
export class SignupSuccess {
  @Field(() => User)
  user: User

  @Field({ description: 'JWT when create user success' })
  token: string

  @Field(() => TodoList)
  todoList: TodoList
}

@ObjectType()
export class SignupError extends BaseError {}

export const SignupOutput = createUnionType({
  name: 'SignupOutput', // the name of the GraphQL union
  types: () => [SignupSuccess, SignupError],
  resolveType(value) {
    if (value.user) return SignupSuccess
    return SignupError
  },
})
