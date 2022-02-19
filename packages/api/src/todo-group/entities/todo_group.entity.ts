import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Todo } from 'src/todo/entities/todo.entity'
import { Auditable } from 'src/types/auditable/auditable.entity'
import { User } from 'src/user/entities/user.entity'

export type TodoGroupDocument = TodoGroup & mongoose.Document

@ObjectType()
@Schema()
export class TodoGroup extends Auditable {
  @Field(() => String)
  @Prop()
  name: string

  @Field(() => [Todo])
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }],
  })
  todos: Todo[]

  @Field(() => [User])
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }],
  })
  owners: User[]
}

export const TodoGroupSchema = SchemaFactory.createForClass(TodoGroup)
