import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import {
  TodoList,
  TodoListSchema,
} from 'src/todo-list/entities/todo-list.entity'
import { TodoListService } from 'src/todo-list/todo-list.service'
import { User, UserSchema } from 'src/user/entities/user.entity'
import { UserModule } from 'src/user/user.module'

import { TodoItem, TodoItemSchema } from './entities/todo-item.entity'
import { TodoItemService } from './todo-item.service'

describe('TodoItemService', () => {
  let service: TodoListService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        MongooseModule.forFeature([
          { name: TodoItem.name, schema: TodoItemSchema },
        ]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([
          { name: TodoList.name, schema: TodoListSchema },
        ]),
        UserModule,
      ],
      providers: [TodoItemService, TodoListService],
    }).compile()

    service = module.get<TodoListService>(TodoListService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
