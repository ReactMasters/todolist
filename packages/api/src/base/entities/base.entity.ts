import { Field, ObjectType } from '@nestjs/graphql'
import { Schema } from '@nestjs/mongoose'

@ObjectType({ isAbstract: true })
@Schema()
export class Base {
  @Field()
  _id: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
