import { Field, ObjectType } from '@nestjs/graphql'

import { Output } from 'src/base/output.entity'

import { TodoList } from '../entities/todo-list.entity'

@ObjectType()
export class AddTodoListOutput extends Output {
  @Field(() => TodoList)
  todoList?: TodoList
}
