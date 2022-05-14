import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TagService } from 'src/tag/tag.service'
import { User } from 'src/user/entities/user.entity'
import { CurrentUser } from 'src/user/user.decorator'
import { UserGuard } from 'src/user/user.guard'

import { AddTodoListInput } from './dto/add-todo-list.input'
import { AddTodoListOutput } from './dto/add-todo-list.output'
import { FindTodoListInput } from './dto/find-todo-list.input'
import { FindTodoListOutput } from './dto/find-todo-list.output'
import { TodoList } from './entities/todo-list.entity'
import { TodoListService } from './todo-list.service'

@Resolver(() => TodoList)
export class TodoListResolver {
  constructor(
    private readonly todoListService: TodoListService,
    private readonly tagService: TagService
  ) {}

  @Mutation(() => AddTodoListOutput)
  async addTodoList(
    @Args('addTodoListInput') addTodoListInput: AddTodoListInput
  ): Promise<AddTodoListOutput> {
    try {
      const todoList = await this.todoListService.addTodoList(addTodoListInput)
      return {
        success: true,
        todoList,
      }
    } catch (error) {
      return {
        success: false,
        message: error?.message ?? '',
      }
    }
  }

  @UseGuards(UserGuard)
  @Query(() => FindTodoListOutput)
  async findTodoList(
    @Args('findTodoListInput') findTodoListInput: FindTodoListInput,
    @CurrentUser() user?: User
  ): Promise<typeof FindTodoListOutput> {
    try {
      const todoList = await this.todoListService.findTodoList(
        findTodoListInput.id,
        user.id
      )
      const tags = await this.tagService.listTagsByTodoList(
        findTodoListInput.id
      )
      return {
        todoList,
        tags,
      }
    } catch (err) {
      return { message: err.message ?? err }
    }
  }
}
