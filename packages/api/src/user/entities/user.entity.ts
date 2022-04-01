import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { BaseEntity } from 'src/base/base.entity'

export type UserDocument = User & Document

@ObjectType()
@Schema({ toObject: { virtuals: true }, timestamps: true })
export class User extends BaseEntity {
  @Field()
  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true })
  salt: string

  @Prop({ type: Date })
  @Field({ nullable: true })
  lastLoginAt: Date | null
}

export const UserSchema = SchemaFactory.createForClass(User)
