import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PartialType,
} from '@nestjs/graphql'
import { Output } from 'src/types/output/output.entity'
import { TodoGroup } from '../entities/todo_group.entity'

@InputType()
export class CreateTodoGroupInput extends OmitType(PartialType(TodoGroup), [
  'id',
]) {
  @Field(() => String)
  name: string
}

@ObjectType()
export class CreateTodoGroupOutput extends Output {
  @Field(() => TodoGroup)
  todoGroup?: TodoGroup
}
