import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateTagInput } from './dto/create-tag.input'
import { CreateTagOutput } from './dto/create-tag.output'
import { ListTagsOutput } from './dto/list-tags.output'
import { Tag } from './entities/tag.entity'
import { TagService } from './tag.service'

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => CreateTagOutput)
  async createTag(
    @Args({ name: 'createTagInput', type: () => CreateTagInput })
    createTagInput: CreateTagInput
  ) {
    const res: CreateTagOutput = {
      success: true,
    }
    try {
      res.tag = await this.tagService.createTag(createTagInput)
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
