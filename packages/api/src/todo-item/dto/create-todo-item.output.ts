import { createUnionType, Field, ObjectType } from '@nestjs/graphql'
import { BaseError } from 'src/base/error.dto'
import { TodoItem } from '../entities/todo-item.entity'

@ObjectType()
class CreateTodoItemSuccess {
  @Field(() => TodoItem)
  todoItem: TodoItem
}

@ObjectType()
class CreateTodoItemError extends BaseError {}

export const CreateTodoItemOutput = createUnionType({
  name: 'CreateTodoItemOutput',
  types: () => [CreateTodoItemSuccess, CreateTodoItemError],
  resolveType: (value) => {
    if (value.todoItem) {
      return CreateTodoItemSuccess
    }
    return CreateTodoItemError
  },
})
