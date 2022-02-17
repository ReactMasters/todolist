import { Document } from 'mongoose'

import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Auditable } from 'src/types/auditable/auditable.entity'

export type UserDocument = User & Document

@ObjectType()
@Schema({ toObject: { virtuals: true }, timestamps: true })
export class User extends Auditable {
  @Field(() => ID)
  id: string

  @Field()
  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ type: Date })
  @Field({ nullable: true })
  lastLoginAt: Date | null
}

export const UserSchema = SchemaFactory.createForClass(User)
