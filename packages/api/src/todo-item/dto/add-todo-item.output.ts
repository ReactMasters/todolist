import { createUnionType, Field, ObjectType } from '@nestjs/graphql'

import { BaseError } from 'src/base/error.dto'

import { TodoItem } from '../entities/todo-item.entity'

@ObjectType()
class AddTodoItemSuccess {
  @Field(() => TodoItem)
  todoItem: TodoItem
}

@ObjectType()
class AddTodoItemError extends BaseError {}

export const AddTodoItemOutput = createUnionType({
  name: 'AddTodoItemOutput',
  types: () => [AddTodoItemSuccess, AddTodoItemError],
  resolveType: (value) => {
    if (value.todoItem) return AddTodoItemSuccess
    return AddTodoItemError
  },
})
