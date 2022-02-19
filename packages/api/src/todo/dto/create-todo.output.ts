import { Field, ObjectType } from '@nestjs/graphql'
import { Output } from 'src/types/output/output.entity'
import { Todo } from '../entities/todo.entity'

@ObjectType()
export class CreateTodoOutput extends Output {
  @Field(() => Todo, { nullable: true })
  todo?: Todo
}
