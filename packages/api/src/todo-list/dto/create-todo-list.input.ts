import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateTodoListInput {
  @Field(() => String)
  name: string

  @Field(() => [String])
  owners: string[]
}
