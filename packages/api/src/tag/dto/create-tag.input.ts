import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Output } from "src/types/output/output.entity";
import { Tag } from "../entities/tag.entity";

@InputType()
export class CreateTagInput extends PickType(Tag, ['name']) {
    @Field()
    name: string
}

@ObjectType()
export class CreateTagOutput extends Output {
    @Field(() => Tag, { nullable: true })
    tag?: Tag
}