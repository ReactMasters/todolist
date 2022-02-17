import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Todo } from 'src/todo/entities/todo.entity'
import { Auditable } from 'src/types/auditable/auditable.entity'
import { User } from 'src/user/entities/user.entity'

export type TodoGroupDocument = TodoGroup & mongoose.Document

@ObjectType()
@Schema()
export class TodoGroup extends Auditable {
  @Field(() => ID)
  @Prop({ id: true })
  id: string

  @Field(() => String)
  @Prop()
  name: string

  @Field(() => [Todo])
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo', unique: true }],
  })
  todos: Todo[]

  @Field(() => [User])
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }],
  })
  owners: User[]
}

export const TodoGroupSchema = SchemaFactory.createForClass(TodoGroup)
