import { Field, ObjectType } from '@nestjs/graphql'
import { Output } from 'src/base/output.entity'
import { TodoList } from '../entities/todo-list.entity'

@ObjectType()
export class CreateTodoListOutput extends Output {
  @Field(() => TodoList)
  todoList?: TodoList
}
