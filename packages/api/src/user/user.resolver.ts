import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateUserInput } from './dto/create-user.input'
import { CreateUserOutput } from './dto/create-user.output'
import { LoginInput } from './dto/login.input'
import { LoginOutput } from './dto/login.output'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => CreateUserOutput)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ): Promise<typeof CreateUserOutput> {
    try {
      return await this.userService.create(createUserInput)
    } catch (error) {
      return { message: error?.message ?? error }
    }
  }

  @Mutation(() => LoginOutput)
  async login(
    @Args('loginInput') loginInput: LoginInput
  ): Promise<typeof LoginOutput> {
    try {
      return await this.userService.login(loginInput)
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

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput)
  }

  @Mutation(() => User)
  removeUser(@Args('id') id: string) {
    return this.userService.remove(id)
  }
}
