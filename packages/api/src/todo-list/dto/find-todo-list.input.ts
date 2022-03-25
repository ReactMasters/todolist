import { Field, InputType } from '@nestjs/graphql'
import { TodoItem } from 'src/todo-item/entities/todo-item.entity'
import { User } from 'src/user/entities/user.entity'
import { TodoList } from '../entities/todo-list.entity'

@InputType()
export class FindTodoListInput extends TodoList {
  @Field(() => String)
  id: string

  @Field(() => [TodoItem])
  todos: TodoItem[]

  @Field(() => [User])
  owners: User[]
}
