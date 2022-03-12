import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { TodoStatus } from 'src/todo-item/dto/todo-status.enum'
import { CreateTodoItemInput } from './dto/create-todo-item.input'
import { TodoDocument, TodoItem } from './entities/todo-item.entity'

@Injectable()
export class TodoItemService {
  constructor(
    @InjectModel(TodoItem.name)
    private readonly todoItemModel: Model<TodoDocument>
  ) {}

  async create({
    content,
    status: todoStatus = TodoStatus.IN_PROGRESS,
    tags = [],
    dueDateTime = null,
  }: CreateTodoItemInput): Promise<TodoItem> {
    return await new this.todoItemModel({
      content,
      todoStatus,
      tags,
      dueDateTime,
    }).save()
  }
}
