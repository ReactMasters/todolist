import { Field, ID, Int, InterfaceType } from '@nestjs/graphql'

@InterfaceType()
export abstract class Pagination {
  @Field(() => Int)
  totalCount: number
}

@InterfaceType()
export abstract class PaginationInput {
  @Field(() => Int)
  size: number

  @Field(() => ID)
  cursor: string
}
