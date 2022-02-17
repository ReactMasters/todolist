import { Field, ObjectType } from '@nestjs/graphql'
import { Output } from 'src/types/output/output.entity'
import { User } from '../entities/user.entity'

@ObjectType()
export class CreateUserOutput extends Output {
  @Field(() => User, { nullable: true })
  user?: User
}
