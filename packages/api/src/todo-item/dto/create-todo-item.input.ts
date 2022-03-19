import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql'
import { TodoStatus } from 'src/todo-item/dto/todo-status.enum'
import { TodoItem } from '../entities/todo-item.entity'

@InputType()
export class CreateTodoItemInput extends OmitType(PartialType(TodoItem), [
  'id',
]) {
  @Field()
  content: string

  @Field({ nullable: true })
  status?: TodoStatus

  // @Field(() => [String])
  // tagNames?: String[];

  @Field({ nullable: true })
  dueDateTime: Date
}
