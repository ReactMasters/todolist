import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { User } from 'src/user/entities/user.entity'
import { CurrentUser } from 'src/user/user.decorator'
import { UserGuard } from 'src/user/user.guard'

import { AddTodoItemInput } from './dto/add-todo-item.input'
import { AddTodoItemOutput } from './dto/add-todo-item.output'
import { TodoItemsInput } from './dto/todo-itmes.input'
import { TodoItemsError, TodoItemsOutput } from './dto/todo-itmes.output'
import { TodoItem } from './entities/todo-item.entity'
import { TodoItemService } from './todo-item.service'

@Resolver(() => TodoItem)
export class TodoItemResolver {
  constructor(private readonly todoService: TodoItemService) {}

  @UseGuards(UserGuard)
  @Mutation(() => AddTodoItemOutput)
  async addTodoItem(
    @Args('addTodoItemInput') addTodoItemInput: AddTodoItemInput,
    @CurrentUser() user?: User
  ): Promise<typeof AddTodoItemOutput> {
    try {
      return {
        todoItem: await this.todoService.create(addTodoItemInput, user?.id),
      }
    } catch (error) {
      return { message: error?.message ?? '' }
    }
  }

  @UseGuards(UserGuard)
  @Query(() => TodoItemsOutput)
  async todoItems(
    @Args('todoItemsInput') todoItemsInput: TodoItemsInput,
    @CurrentUser() user?: User
  ): Promise<typeof TodoItemsOutput> {
    try {
      // check isMine
      if (!user) throw Error('No authorized')
      const result = await this.todoService.getTodoItems(todoItemsInput)
      return result
    } catch (error) {
      return { message: error?.message ?? '' } as TodoItemsError
    }
  }

  @UseGuards(UserGuard)
  @Query(() => TodoItem, { nullable: true })
  async todoItem(
    @Args('id') id: string,
    @CurrentUser() user?: User
  ): Promise<TodoItem> {
    try {
      // todo : check isMine
      if (!user) throw Error('No authorized')
      return await this.todoService.getTodoItem(id)
    } catch (error) {
      // todo : logging errors
      return null
    }
  }
}
