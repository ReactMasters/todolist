import { Field, ObjectType } from '@nestjs/graphql'
import { Output } from 'src/base/output.entity'
import { TodoItem } from '../entities/todo-item.entity'

@ObjectType()
export class CreateTodoItemOutput extends Output {
  @Field(() => TodoItem, { nullable: true })
  todoItem?: TodoItem
}
