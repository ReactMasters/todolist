import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { TodoList, TodoListDocument } from './entities/todo-list.entity'

@Injectable()
export class TodoListService {
  constructor(
    @InjectModel(TodoList.name)
    private readonly TodoListModel: Model<TodoListDocument>
  ) {}

  async addTodoList(name: string, owners: string[]) {
    return await new this.TodoListModel({ name, owners }).save()
  }

  async getTodolistsByUserId(userId: string): Promise<TodoList[]> {
    return await this.TodoListModel.find({ owners: [userId] }).populate(
      'owners'
    )
  }

  async findTodoList(id: string, ownerId: string): Promise<TodoList> {
    return await this.TodoListModel.findOne({
      id,
      owners: { $in: [ownerId] },
    }).populate('owners')
  }
}
