import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'
import { TodoStatus } from 'src/todo-item/dto/todo-status.enum'
import { TodoListService } from 'src/todo-list/todo-list.service'

import { AddTodoItemInput } from './dto/add-todo-item.input'
import { TodoItemsInput } from './dto/todo-itmes.input'
import { TodoItemsOutput } from './dto/todo-itmes.output'
import { TodoItemDocument, TodoItem } from './entities/todo-item.entity'

@Injectable()
export class TodoItemService {
  constructor(
    @InjectModel(TodoItem.name)
    private readonly todoItemModel: Model<TodoItemDocument>,
    private readonly todoListService: TodoListService
  ) {}

  async create(
    {
      todoListId,
      content,
      status = TodoStatus.IN_PROGRESS,
      tags = [],
      dueDateTime = null,
    }: AddTodoItemInput,
    userId: string
  ) {
    const todoList = await this.todoListService.findTodoList(todoListId, userId)
    if (!todoList) throw Error('Unauthorized')

    const newTodoItem = await new this.todoItemModel({
      content,
      status,
      tags,
      dueDateTime,
      todoListId,
    }).save()

    return newTodoItem
  }

  async getTodoItems(input: TodoItemsInput): Promise<typeof TodoItemsOutput> {
    const { cursor, size, tagIds, todoListId } = input
    // todo :  this.todolistmodel.find()
    const items = await this.todoItemModel.find({ todoListId })
    return {
      items,
      totalCount: 0,
    }
  }
  async getTodoItem(id: string): Promise<TodoItem> {
    return await this.todoItemModel.findById(id)
  }
}
