import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AddTagInput } from './dto/add-tag.input'
import { AddTagOutput } from './dto/add-tag.output'
import TagsInput from './dto/tags.input'
import { TagsOutput } from './dto/tags.output'
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

  @Query(() => TagsOutput)
  async tags(input: TagsInput): Promise<TagsOutput> {
    const { tagIds } = input
    const res: TagsOutput = {
      success: true,
    }
    try {
      res.tags = await this.tagService.listTags(tagIds)
    } catch (error) {
      res.success = false
      res.message = error?.message ?? ''
    }
    return res
  }
}
