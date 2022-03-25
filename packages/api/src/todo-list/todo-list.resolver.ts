import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateTodoListInput } from './dto/create-todo-list.input'
import { CreateTodoListOutput } from './dto/create-todo-list.output'
import { FindTodoListInput } from './dto/find-todo-list.input'
import { FindTodoListOutput } from './dto/find-todo-list.output'
import { TodoList } from './entities/todo-list.entity'
import { TodoListService } from './todo-list.service'

@Resolver(() => TodoList)
export class TodoListResolver {
  constructor(private readonly todoListService: TodoListService) {}

  @Mutation(() => CreateTodoListOutput)
  async createTodoList(
    @Args('createTodoListInput') createTodoListInput: CreateTodoListInput
  ) {
    const res: CreateTodoListOutput = {
      success: true,
    }
    try {
      res.todoList = await this.todoListService.createTodoList(
        createTodoListInput
      )
    } catch (error) {
      res.message = error?.message ?? ''
    }
    return res
  }

  @Query(() => FindTodoListOutput)
  async findTodoList(
    @Args('findTodoListInput') findTodoListInput: FindTodoListInput
  ): Promise<typeof FindTodoListOutput> {
    try {
      const todoList = await this.todoListService.findTodoList(
        findTodoListInput.id
      )
      return {
        todoList,
      }
    } catch (err) {
      return { message: err.message ?? err }
    }
  }
}
