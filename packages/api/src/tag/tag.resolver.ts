import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AddTagInput } from './dto/add-tag.input'
import { AddTagOutput } from './dto/add-tag.output'
import { ListTagsOutput } from './dto/list-tags.output'
import { Tag } from './entities/tag.entity'
import { TagService } from './tag.service'

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => AddTagOutput)
  async addTag(
    @Args({ name: 'addTagInput', type: () => AddTagInput })
    addTagInput: AddTagInput
  ) {
    const res: AddTagOutput = {
      success: true,
    }
    try {
      res.tag = await this.tagService.createTag(addTagInput)
    } catch (error) {
      res.success = false
      res.message = error?.message ?? ''
    }
    return res
  }

  @Query(() => ListTagsOutput)
  async listTags(): Promise<ListTagsOutput> {
    const res: ListTagsOutput = {
      success: true,
    }
    try {
      res.tags = await this.tagService.listTags()
    } catch (error) {
      res.success = false
      res.message = error?.message ?? ''
    }
    return res
  }
}
