import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql'
import { TodoStatus } from 'src/types/todo-status/todo-status.entity'
import { Todo } from '../entities/todo.entity'

@InputType()
export class CreateTodoInput extends OmitType(PartialType(Todo), ['id']) {
  @Field()
  content: string

  @Field({ nullable: true })
  todoStatus?: TodoStatus

  // @Field(() => [String])
  // tagNames?: String[];

  @Field({ nullable: true })
  dueDateTime: Date
}
