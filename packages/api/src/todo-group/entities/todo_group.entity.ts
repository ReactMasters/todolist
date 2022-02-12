import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Todo } from "src/todo/entities/todo.entity";
import { Auditable } from "src/types/auditable/auditable.entity";
import * as mongoose from 'mongoose';
import { User } from "src/user/entities/user.entity";

export type TodoGroupDocument = TodoGroup & mongoose.Document;

@ObjectType()
@Schema()
export class TodoGroup extends Auditable {
    @Field(() => ID)
    _id: string

    @Field(() => String)
    @Prop()
    name: string

    @Field(() => [Todo])
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo', index: true, unique: true }] })
    todos: Todo[]

    @Field(() => [User])
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true, unique: true }] })
    owners: User[]
}

export const TodoGroupSchema = SchemaFactory.createForClass(TodoGroup);