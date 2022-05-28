import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { AddTodoListInput } from './dto/add-todo-list.input'
import { TodoList, TodoListDocument } from './entities/todo-list.entity'

@Injectable()
export class TodoListService {
  constructor(
    @InjectModel(TodoList.name)
    private readonly TodoListModel: Model<TodoListDocument>
  ) {}

  async addTodoList(addTodoListInput: AddTodoListInput) {
    const { name, owners } = addTodoListInput
    return await new this.TodoListModel({ name, owners, todos: [] }).save()
  }

  async getTodolistsByUserId(userId: string): Promise<TodoList[]> {
    return await this.TodoListModel.findOne({ owners: userId })
      .populate('todos')
      .populate('owners')
  }

  async findTodoList(id: string, ownerId: string): Promise<TodoList> {
    return await this.TodoListModel.findOne({
      id,
      owners: { $in: [ownerId] },
    })
      .populate('todos')
      .populate('owners')
  }

  async addTodoItemToList(
    todoListId: string,
    todoItemId: string,
    ownerId: string
  ) {
    return await this.TodoListModel.updateOne(
      {
        id: todoListId,
        owners: { $in: [ownerId] },
      },
      {
        $push: { todos: todoItemId },
      }
    )
  }
}
