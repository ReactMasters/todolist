import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql'
import { TodoGroup } from '../entities/todo_group.entity'

@InputType()
export class CreateTodoGroupInput extends OmitType(PartialType(TodoGroup), [
  'id',
]) {
  @Field(() => String)
  name: string
}
