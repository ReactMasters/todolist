import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import * as mongoose from 'mongoose'
import { BaseEntity } from 'src/base/base.entity'
import { TodoItem } from 'src/todo-item/entities/todo-item.entity'
import { User } from 'src/user/entities/user.entity'

export type TodoListDocument = TodoList & mongoose.Document

@ObjectType()
@Schema()
export class TodoList extends BaseEntity {
  @Field(() => String)
  @Prop()
  name: string

  @Field(() => [TodoItem])
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: TodoItem.name }],
  })
  todos: TodoItem[]

  @Field(() => [User])
  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: User.name, index: true },
    ],
  })
  owners: User[]
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList)
