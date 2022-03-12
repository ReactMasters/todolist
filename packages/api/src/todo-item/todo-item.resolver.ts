import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CreateTodoItemInput } from './dto/create-todo-item.input'
import { CreateTodoItemOutput } from './dto/create-todo-item.output'
import { TodoItem } from './entities/todo-item.entity'
import { TodoItemService } from './todo-item.service'

@Resolver(() => TodoItem)
export class TodoItemResolver {
  constructor(private readonly todoService: TodoItemService) {}

  @Mutation(() => CreateTodoItemOutput)
  async createTotoItem(
    @Args('createTodoItemInput') createTodoItemInput: CreateTodoItemInput
  ): Promise<CreateTodoItemOutput> {
    const res: CreateTodoItemOutput = {
      success: true,
    }
    try {
      res.todoItem = await this.todoService.create(createTodoItemInput)
    } catch (error) {
      res.message = error?.message ?? ''
    }
    return res
  }
}
