import { createUnionType, Field, ObjectType } from '@nestjs/graphql'

import { BaseError } from 'src/base/error.dto'

import { TodoList } from '../entities/todo-list.entity'

@ObjectType()
class MyTodoListsSuccess {
  @Field(() => [TodoList], {
    nullable: true,
  })
  todoLists: TodoList[]
}

@ObjectType()
class MyTodoListsError extends BaseError {}

export const MyTodoListsOutput = createUnionType({
  name: 'MyTodoListsOutput',
  types: () => [MyTodoListsSuccess, MyTodoListsError],
  resolveType: (value) => {
    if (value?.todoLists) {
      return MyTodoListsSuccess
    }
    return MyTodoListsError
  },
})
