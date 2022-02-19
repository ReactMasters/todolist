import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateTodoGroupInput } from './dto/create-todo-group.input'
import { TodoGroup, TodoGroupDocument } from './entities/todo_group.entity'

@Injectable()
export class TodoGroupService {
  constructor(
    @InjectModel(TodoGroup.name)
    private readonly TodoModel: Model<TodoGroupDocument>
  ) {}

  async createTodoGroup(createTodoGroupInput: CreateTodoGroupInput) {
    const { name } = createTodoGroupInput
    return await new this.TodoModel({ name }).save()
  }
}
