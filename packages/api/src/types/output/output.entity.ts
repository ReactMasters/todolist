import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Output {
  @Field()
  success: boolean

  @Field({ nullable: true })
  message?: string
}
