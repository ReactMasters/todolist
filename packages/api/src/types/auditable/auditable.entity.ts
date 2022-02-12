import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema } from "@nestjs/mongoose";

@ObjectType({ isAbstract: true })
@Schema()
export abstract class Auditable {
    @Field(() => Date)
    @Prop({ type: Date, required: true, default: () => new Date() })
    createdAt: Date

    @Field(() => Date, { nullable: true })
    @Prop({ type: Date })
    updatedAt?: Date

    @Field(() => Date, { nullable: true })
    @Prop({ type: Date })
    deletedAt?: Date
}