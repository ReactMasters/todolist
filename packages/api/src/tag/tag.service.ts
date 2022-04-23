import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { AddTagInput } from './dto/add-tag.input'
import { Tag, TagDocument } from './entities/tag.entity'

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag.name) private readonly tagModel: Model<TagDocument>
  ) {}

  async createTag(createTagInput: AddTagInput): Promise<Tag> {
    const { name } = createTagInput
    const tag = await new this.tagModel({ name }).save()
    return tag
  }

  async listTags(): Promise<Tag[]> {
    return await this.tagModel.find({})
  }
}
