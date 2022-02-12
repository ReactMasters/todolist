import { Field, InputType, ObjectType, OmitType, PartialType } from '@nestjs/graphql'
import { Tag } from 'src/tag/entities/tag.entity'
import { Output } from 'src/types/output/output.entity'
import { TodoStatus } from 'src/types/todo-status/todo-status.entity'
import { Todo } from '../entities/todo.entity'


@InputType()
export class CreateTodoInput extends OmitType(PartialType(Todo), ['_id']) {
  @Field()
  content: string

  @Field({ nullable: true })
  todoStatus?: TodoStatus

  // @Field(() => [String])
  // tagNames?: String[];

  @Field({ nullable: true })
  dueDateTime: Date;
}

@ObjectType()
export class CreateTodoOutput extends Output {
  @Field(() => Todo, { nullable: true })
  todo?: Todo
}
