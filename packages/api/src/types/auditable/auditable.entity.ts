import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema } from '@nestjs/mongoose'

@ObjectType({ isAbstract: true })
@Schema()
export abstract class Auditable {
  @Field()
  @Prop({ type: Date, required: true, default: () => new Date() })
  createdAt: Date

  @Field()
  @Prop({ type: Date, required: true, default: () => new Date() })
  updatedAt: Date

  @Field({ nullable: true })
  @Prop({ type: Date })
  deletedAt?: Date
}
