import { Field, InputType, PickType } from '@nestjs/graphql'
import { Tag } from '../entities/tag.entity'

@InputType()
export class AddTagInput extends PickType(Tag, ['name']) {
  @Field()
  name: string
}
