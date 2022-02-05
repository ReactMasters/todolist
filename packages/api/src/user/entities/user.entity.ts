import { Document } from 'mongoose'

import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type UserDocument = User & Document

@ObjectType()
@Schema()
export class User {
  @Field()
  _id: string

  @Field()
  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  // @Field()
  // createdAt: Date;

  // @Field()
  // updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)
