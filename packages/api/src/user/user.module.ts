import { Module } from '@nestjs/common'

import { TodoListService } from 'src/todo-list/todo-list.service'

import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
  providers: [UserResolver, UserService, TodoListService],
  exports: [UserService],
})
export class UserModule {}
