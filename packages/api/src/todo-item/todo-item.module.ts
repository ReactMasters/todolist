import { Module } from '@nestjs/common'

import { TodoListService } from 'src/todo-list/todo-list.service'
import { UserModule } from 'src/user/user.module'

import { TodoItemResolver } from './todo-item.resolver'
import { TodoItemService } from './todo-item.service'

@Module({
  imports: [UserModule],
  providers: [TodoItemResolver, TodoItemService, TodoListService],
})
export class TodoItemModule {}
