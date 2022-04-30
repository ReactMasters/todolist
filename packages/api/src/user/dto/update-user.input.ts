import { Field, InputType, PartialType } from '@nestjs/graphql'

import { SignupInput } from './signup.input'

@InputType()
export class UpdateUserInput extends PartialType(SignupInput) {
  @Field()
  id: string
}
