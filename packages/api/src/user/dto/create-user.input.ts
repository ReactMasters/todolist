import { Field, InputType, PickType } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
import { IsPassword } from 'src/validator/validator.decorator'
import { User } from '../entities/user.entity'
@InputType()
export class CreateUserInput extends PickType(User, [
  'email',
  'password',
] as const) {
  @Field({ description: 'user email' })
  @IsEmail()
  email: string

  @Field({ description: 'user password' })
  @IsPassword()
  password: string
}
