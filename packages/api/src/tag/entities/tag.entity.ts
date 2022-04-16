import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Document } from 'mongoose'
import { BaseEntity } from 'src/base/base.entity'
import { User } from 'src/user/entities/user.entity'

export type TagDocument = Tag & Document

@ObjectType()
@Schema()
export class Tag extends BaseEntity {
  @Field()
  @Prop()
  name: string

  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, index: true })
  owner: User
}

export const TagSchema = SchemaFactory.createForClass(Tag)
