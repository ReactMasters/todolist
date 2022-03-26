import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { User } from 'src/user/entities/user.entity'
import { CurrentUser } from 'src/user/user.decorator'
import { UserGuard } from 'src/user/user.guard'
import { CreateTodoItemInput } from './dto/create-todo-item.input'
import { CreateTodoItemOutput } from './dto/create-todo-item.output'
import { TodoItem } from './entities/todo-item.entity'
import { TodoItemService } from './todo-item.service'

@Resolver(() => TodoItem)
export class TodoItemResolver {
  constructor(private readonly todoService: TodoItemService) {}

  @UseGuards(UserGuard)
  @Mutation(() => CreateTodoItemOutput)
  async createTodoItem(
    @Args('createTodoItemInput') createTodoItemInput: CreateTodoItemInput,
    @CurrentUser() user?: User
  ): Promise<typeof CreateTodoItemOutput> {
    try {
      return {
        todoItem: await this.todoService.create(createTodoItemInput, user?.id),
      }
    } catch (error) {
      return { message: error?.message ?? '' }
    }
  }
}
