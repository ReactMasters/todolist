import { Field, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Tag } from 'src/tag/entities/tag.entity'
import { Auditable } from 'src/types/auditable/auditable.entity'
import { TodoStatus } from 'src/types/todo-status/todo-status.entity'

export type TodoDocument = Todo & mongoose.Document

@ObjectType()
@Schema()
export class Todo extends Auditable {
  @Field()
  @Prop()
  content: string

  @Field(() => TodoStatus)
  @Prop({ required: true })
  todoStatus: TodoStatus

  @Field(() => [Tag])
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag', unique: true }],
  })
  tags: Tag[]

  @Field({ nullable: true })
  @Prop({ type: Date })
  dueDateTime: Date | null
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
