import { createUnionType, Field, ObjectType } from '@nestjs/graphql'

import { BaseError } from 'src/base/error.dto'
import { Pagination } from 'src/base/pagination.dto'

import { TodoItem } from '../entities/todo-item.entity'

@ObjectType()
export class TodoItemsSuccess extends Pagination {
  @Field(() => [TodoItem])
  items: TodoItem[]
}

@ObjectType()
export class TodoItemsError extends BaseError {}

export const TodoItemsOutput = createUnionType({
  name: 'TodoItemsOutput', // the name of the GraphQL union
  types: () => [TodoItemsSuccess, TodoItemsError],
  resolveType(value) {
    if (value.items) return TodoItemsSuccess
    return TodoItemsError
  },
})
