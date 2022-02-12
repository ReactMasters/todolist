import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql'
import { Output } from 'src/types/output/output.entity'

import { User } from '../entities/user.entity'

@InputType()
export class CreateUserInput extends PickType(User, [
  'email',
  'password',
] as const) {
  @Field({ description: 'user email' })
  email: string

  @Field({ description: 'user password' })
  password: string
}

@ObjectType()
export class CreateUserOutput extends Output {
  @Field(() => User, { nullable: true })
  user?: User
}
