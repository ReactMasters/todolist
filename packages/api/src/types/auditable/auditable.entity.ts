import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';

@ObjectType({ isAbstract: true })
@Schema()
export abstract class Auditable {
  @Field(() => ID)
  id: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field({ nullable: true })
  @Prop({ type: Date })
  deletedAt?: Date
}
