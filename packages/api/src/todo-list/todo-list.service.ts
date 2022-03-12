import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateTodoListInput } from './dto/create-todo-list.input'
import { TodoList, TodoListDocument } from './entities/todo-list.entity'

@Injectable()
export class TodoListService {
  constructor(
    @InjectModel(TodoList.name)
    private readonly TodoListModel: Model<TodoListDocument>
  ) {}

  async createTodoList(createTodoListInput: CreateTodoListInput) {
    const { name } = createTodoListInput
    return await new this.TodoListModel({ name }).save()
  }
}
