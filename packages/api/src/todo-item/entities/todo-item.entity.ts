import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import * as mongoose from 'mongoose'
import { BaseEntity } from 'src/base/base.entity'
import { Tag } from 'src/tag/entities/tag.entity'
import { TodoStatus } from 'src/todo-item/dto/todo-status.enum'
import { TodoList } from 'src/todo-list/entities/todo-list.entity'

export type TodoItemDocument = TodoItem & mongoose.Document

@ObjectType()
@Schema({ toObject: { virtuals: true }, timestamps: true })
export class TodoItem extends BaseEntity {
  @Field()
  @Prop()
  content: string

  @Field(() => TodoStatus)
  @Prop({ required: true })
  status: TodoStatus

  @Field(() => [Tag])
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag', index: true }],
  })
  tags: Tag[]

  @Field({ nullable: true })
  @Prop({ type: Date })
  dueDateTime: Date | null

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'TodoList' } })
  todoListId: string

  @Field(() => TodoList)
  todoList: TodoList
}

export const TodoItemSchema = SchemaFactory.createForClass(TodoItem)
