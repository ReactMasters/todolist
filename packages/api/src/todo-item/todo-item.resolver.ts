import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { User } from 'src/user/entities/user.entity'
import { CurrentUser } from 'src/user/user.decorator'
import { UserGuard } from 'src/user/user.guard'
import { AddTodoItemInput } from './dto/add-todo-item.input'
import { AddTodoItemOutput } from './dto/add-todo-item.output'
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
}
