import { Field, InputType, PickType } from '@nestjs/graphql'
import { User } from '../entities/user.entity'

@InputType()
export class LoginInput extends PickType(User, ['email', 'password'] as const) {
  @Field({ description: 'user email' })
  email: string

  @Field({ description: 'user password' })
  password: string
}
