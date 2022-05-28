import { createUnionType, Field, ObjectType } from '@nestjs/graphql'

import { BaseError } from 'src/base/error.dto'

import { TodoItem } from '../entities/todo-item.entity'

@ObjectType()
class UpdateTodoItemSuccess {
  @Field(() => TodoItem)
  todoItem: TodoItem
}

@ObjectType()
class UpdateTodoItemError extends BaseError {}

export const UpdateTodoItemOutput = createUnionType({
  name: 'UpdateTodoItemOutput',
  types: () => [UpdateTodoItemSuccess, UpdateTodoItemError],
  resolveType: (value) => {
    if (value.todoItem) return UpdateTodoItemSuccess
    return UpdateTodoItemError
  },
})
