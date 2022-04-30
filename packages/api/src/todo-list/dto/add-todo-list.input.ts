import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AddTodoListInput {
  @Field(() => String)
  name: string

  @Field(() => [String])
  owners: string[]
}
