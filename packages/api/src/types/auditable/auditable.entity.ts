import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";

@ObjectType({ isAbstract: true })
export abstract class Auditable {
    @Field(() => Date)
    @Prop({ type: Date, required: true })
    createdAt: Date

    @Field(() => Date, { nullable: true })
    @Prop({ type: Date })
    updatedAt?: Date

    @Field(() => Date, { nullable: true })
    @Prop({ type: Date })
    deletedAt?: Date
}