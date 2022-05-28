import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'
import { TodoStatus } from 'src/todo-item/dto/todo-status.enum'
import { TodoListService } from 'src/todo-list/todo-list.service'
import { User } from 'src/user/entities/user.entity'

import { AddTodoItemInput } from './dto/add-todo-item.input'
import { TodoItemsInput } from './dto/todo-itmes.input'
import { TodoItemsOutput } from './dto/todo-itmes.output'
import { UpdateTodoItemInput } from './dto/update-todo-item.input'
import { TodoDocument, TodoItem } from './entities/todo-item.entity'

@Injectable()
export class TodoItemService {
  constructor(
    @InjectModel(TodoItem.name)
    private readonly todoItemModel: Model<TodoDocument>,
    private readonly todoListService: TodoListService
  ) {}

  async create(
    {
      todoListId,
      content,
      status = TodoStatus.IN_PROGRESS,
      dueDateTime = null,
    }: AddTodoItemInput,
    ownerId
  ) {
    const newTodoItem = await new this.todoItemModel({
      content,
      status,
      tagIds: [],
      dueDateTime,
    }).save()
    await this.todoListService.addTodoItemToList(
      todoListId,
      newTodoItem.id,
      ownerId
    )
    return newTodoItem
  }

  async getTodoItems(
    input: TodoItemsInput,
    user: User
  ): Promise<typeof TodoItemsOutput> {
    const { cursor, size, tagIds, todoListId } = input
    // todo :  this.todolistmodel.find()
    return {
      items: [],
      totalCount: 0,
    }
  }
  async getTodoItem(id: string): Promise<TodoItem> {
    return await this.todoItemModel.findById(id)
  }

  async updateTodoItem(
    { id, update }: UpdateTodoItemInput,
    ownerId
  ): Promise<TodoItem> {
    //TODO: Unit test for owner authorization
    const updatedTodoItem = await this.todoItemModel
      .findOneAndUpdate(
        {
          id,
          todoList: {
            owners: [ownerId],
          },
        },
        update,
        {
          new: true, // Return UPDATED document
        }
      )
      .exec()
    return updatedTodoItem
  }
}
