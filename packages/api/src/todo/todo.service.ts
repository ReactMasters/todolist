import { Model } from 'mongoose'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { CreateTodoInput } from './dto/create-todo.input'
import { Todo, TodoDocument } from './entities/todo.entity'
import { TodoStatus } from 'src/types/todo-status/todo-status.entity'

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>
  ) { }

  async create({
    content,
    todoStatus = TodoStatus.IN_PROGRESS,
    tags = [],
    dueDateTime = null
  }: CreateTodoInput): Promise<Todo> {
    return await new this.todoModel({ content, todoStatus, tags, dueDateTime, createdAt: new Date() }).save();
  }
}
