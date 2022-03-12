import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Document } from 'mongoose'
import { Auditable } from 'src/types/auditable/auditable.entity'
import { User } from 'src/user/entities/user.entity'

export type TagDocument = Tag & Document

@ObjectType()
@Schema()
export class Tag extends Auditable {

  @Field()
  @Prop()
  name: string

  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true })
  owner: User
}

export const TagSchema = SchemaFactory.createForClass(Tag)
