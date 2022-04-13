import { createUnionType, Field, ObjectType } from '@nestjs/graphql'
import { BaseError } from 'src/base/error.dto'
import { TodoList } from 'src/todo-list/entities/todo-list.entity'
import { User } from '../entities/user.entity'

@ObjectType()
export class CreateUserSuccess {
  @Field(() => User)
  user: User

  @Field({ description: 'JWT when create user success' })
  token: string

  @Field(() => TodoList)
  todoList: TodoList
}

@ObjectType()
export class CreateUserError extends BaseError {}

export const CreateUserOutput = createUnionType({
  name: 'CreateUserOutput', // the name of the GraphQL union
  types: () => [CreateUserSuccess, CreateUserError],
  resolveType(value) {
    if (value.user) return CreateUserSuccess
    return CreateUserError
  },
})
