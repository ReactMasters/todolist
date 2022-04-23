import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AddTodoListInput } from 'src/todo-list/dto/add-todo-list.input'
import { TodoListService } from 'src/todo-list/todo-list.service'

import { MeOutput } from './dto/me.output'
import { SigninInput } from './dto/signin.input'
import { SigninOutput } from './dto/signin.output'
import { SignupInput } from './dto/signup.input'
import { SignupOutput } from './dto/signup.output'
import { User } from './entities/user.entity'
import { DEFAULT_TODO_LIST_NAME } from './user.config'
import { CurrentUser } from './user.decorator'
import { UserGuard } from './user.guard'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly todoListService: TodoListService
  ) {}

  @Mutation(() => SignupOutput)
  async signup(
    @Args('signupInput') signupInput: SignupInput
  ): Promise<typeof SignupOutput> {
    try {
      const newUser = await this.userService.create(signupInput)
      const defaultTodoListInput: AddTodoListInput = {
        name: DEFAULT_TODO_LIST_NAME,
        owners: [newUser.user.id],
      }
      const defaultTodoList = await this.todoListService.addTodoList(
        defaultTodoListInput
      )

      return {
        ...newUser,
        todoList: defaultTodoList,
      }
    } catch (error) {
      return { message: error?.message ?? error }
    }
  }

  @Mutation(() => SigninOutput)
  async signin(
    @Args('signinInput') signinInput: SigninInput
  ): Promise<typeof SigninOutput> {
    try {
      return await this.userService.signin(signinInput)
    } catch (error) {
      return { message: error?.message ?? error }
    }
  }

  @UseGuards(UserGuard)
  @Query(() => MeOutput)
  async me(@CurrentUser() user?: User): Promise<typeof MeOutput> {
    try {
      if (!user) throw 'login need'
      return { user }
    } catch (error) {
      return { message: error?.message ?? error }
    }
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll()
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id') id: string) {
    return this.userService.findOne(id)
  }
}
