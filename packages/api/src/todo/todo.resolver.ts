import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateTodoInput, CreateTodoOutput } from './dto/create-todo.input'

import { Todo } from './entities/todo.entity'
import { TodoService } from './todo.service'

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) { }

  @Mutation(() => CreateTodoOutput)
  async createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput
  ): Promise<CreateTodoOutput> {
    const res: CreateTodoOutput = {
      success: true
    }
    try {
      res.todo = await this.todoService.create(createTodoInput);
    } catch (error) {
      res.message = error?.message ?? ''
    }
    return res;
  }
}
