import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import {
  TodoList,
  TodoListSchema,
} from 'src/todo-list/entities/todo-list.entity'
import { TodoListService } from 'src/todo-list/todo-list.service'
import { User, UserSchema } from 'src/user/entities/user.entity'
import { UserModule } from 'src/user/user.module'
import { UserService } from 'src/user/user.service'

import { TodoItem, TodoItemSchema } from './entities/todo-item.entity'
import { TodoItemResolver } from './todo-item.resolver'
import { TodoItemService } from './todo-item.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoItem.name, schema: TodoItemSchema },
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: TodoList.name, schema: TodoListSchema },
    ]),
    UserModule,
  ],
  providers: [TodoItemResolver, TodoItemService, TodoListService, UserService],
})
export class TodoItemModule {}
