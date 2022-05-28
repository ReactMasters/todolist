import { Module } from '@nestjs/common'

import { TagModule } from 'src/tag/tag.module'
import { UserModule } from 'src/user/user.module'

import { TodoListResolver } from './todo-list.resolver'
import { TodoListService } from './todo-list.service'

@Module({
  imports: [UserModule, TagModule],
  providers: [TodoListResolver, TodoListService],
  exports: [TodoListService],
})
export class TodoListModule {}
