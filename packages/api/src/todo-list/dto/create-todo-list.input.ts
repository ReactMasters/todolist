import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql'
import { TodoList } from '../entities/todo-list.entity'

@InputType()
export class CreateTodoListInput extends OmitType(PartialType(TodoList), [
  'id',
]) {
  @Field(() => String)
  name: string
}
