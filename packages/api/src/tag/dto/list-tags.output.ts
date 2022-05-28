import { Field, ObjectType } from '@nestjs/graphql'

import { Output } from 'src/base/output.entity'

import { Tag } from '../entities/tag.entity'

@ObjectType()
export class ListTagsOutput extends Output {
  @Field(() => [Tag])
  tags?: Tag[]
}
