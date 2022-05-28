import { Field, ID, InputType, PartialType, PickType } from '@nestjs/graphql'

import { TodoItem } from '../entities/todo-item.entity'

@InputType()
class UpdateInput extends PartialType(TodoItem) {
  @Field({ nullable: true })
  content?: string

  @Field(() => [ID], { nullable: 'itemsAndList' })
  tagIds?: string[]

  @Field({ nullable: true })
  dueDateTime?: Date
}

@InputType()
export class UpdateTodoItemInput extends PickType(TodoItem, ['id']) {
  @Field()
  id: string

  @Field(() => UpdateInput)
  update: UpdateInput
}
