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

  async findTodoList(id: string, ownerId: string): Promise<TodoList> {
    return await this.TodoListModel.findOne({
      id,
      owners: { $in: [ownerId] },
    })
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
