import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
class TagsInput {
  @Field(() => [ID])
  tagIds: string[]
}

export default TagsInput
