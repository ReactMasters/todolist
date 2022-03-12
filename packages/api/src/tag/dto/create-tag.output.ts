import { Field, ObjectType } from '@nestjs/graphql'
import { Output } from 'src/types/output/output.entity'
import { Tag } from '../entities/tag.entity'

@ObjectType()
export class CreateTagOutput extends Output {
  @Field(() => Tag, { nullable: true })
  tag?: Tag
}
