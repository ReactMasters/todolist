import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Tag } from "src/tag/entities/tag.entity";
import { TodoStatus } from "src/types/todo-status/todo-status.entity";
import * as mongoose from 'mongoose';
import { Auditable } from "src/types/auditable/auditable.entity";

export type TodoDocument = Todo & mongoose.Document;

@ObjectType()
@Schema()
export class Todo extends Auditable {
    @Field(() => ID)
    _id

    @Field()
    @Prop()
    content: string

    @Field(() => TodoStatus)
    @Prop({ required: true })
    todoStatus: TodoStatus

    @Field(() => [Tag])
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag', unique: true }] })
    tags: Tag[]

    @Field(() => Date, { nullable: true })
    @Prop({ type: Date })
    dueDateTime: Date
}

export const TodoSchema = SchemaFactory.createForClass(Todo);