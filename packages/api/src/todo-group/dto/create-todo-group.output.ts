import { Field, ObjectType } from '@nestjs/graphql'
import { Output } from 'src/types/output/output.entity'
import { TodoGroup } from '../entities/todo_group.entity'

@ObjectType()
export class CreateTodoGroupOutput extends Output {
  @Field(() => TodoGroup)
  todoGroup?: TodoGroup
}
