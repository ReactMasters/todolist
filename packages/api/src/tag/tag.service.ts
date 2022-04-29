import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateTagInput } from './dto/create-tag.input'
import { Tag, TagDocument } from './entities/tag.entity'

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag.name) private readonly tagModel: Model<TagDocument>
  ) {}

  async createTag(createTagInput: CreateTagInput): Promise<Tag> {
    const { name } = createTagInput
    const tag = await new this.tagModel({ name }).save()
    return tag
  }

  async listTags(): Promise<Tag[]> {
    return await this.tagModel.find({})
  }

  async listTagsByTodoList(todoListId: string): Promise<Tag[]> {
    return await this.tagModel.find({
      todoLists: [todoListId],
    })
  }
}
