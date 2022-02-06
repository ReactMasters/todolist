import { Model } from 'mongoose'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User, UserDocument } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async create({ email, password }: CreateUserInput): Promise<User> {
    const exist = await this.userModel.findOne({ email })
    if (exist) throw `${email} is already exist`
    const user = new this.userModel({ email, password }).save()
    return await user
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find()
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id)
  }

  async update({ id, email, password }: UpdateUserInput): Promise<User> {
    return await this.userModel
      .findByIdAndUpdate(id, { email, password })
      .exec()
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec()
  }
}
