import { createUnionType, Field, ObjectType } from '@nestjs/graphql'
import { BaseError } from 'src/base/error.dto'
import { TodoList } from '../entities/todo-list.entity'

@ObjectType()
class FindTodoListSuccess {
  @Field(() => TodoList, {
    nullable: true,
  })
  todoList: TodoList
}

@ObjectType()
class FindTodoListError extends BaseError {}

export const FindTodoListOutput = createUnionType({
  name: 'FindTodoListOutput',
  types: () => [FindTodoListSuccess, FindTodoListError],
  resolveType: (value) => {
    if (value?.todoList) {
      return FindTodoListSuccess
    }
    return FindTodoListError
  },
})
