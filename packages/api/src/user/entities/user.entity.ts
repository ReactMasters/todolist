import { Document } from 'mongoose'

import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type UserDocument = User & Document

@ObjectType()
@Schema()
export class User {
  @Field(() => ID)
  _id: string

  @Field()
  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ type: Date })
  @Field(() => Int)
  lastLoginAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
