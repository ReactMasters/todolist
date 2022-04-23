import { Field, ID, InputType } from '@nestjs/graphql'

import { PaginationInput } from 'src/base/pagination.dto'

@InputType()
export class TodoItemsInput extends PaginationInput {
  @Field(() => ID)
  todoListId: string

  @Field(() => [ID], { defaultValue: [] })
  tagIds: string[]

  // size: Int = 10
  // cursor: ID!
  // tagIds: [ID!]! = []
}
