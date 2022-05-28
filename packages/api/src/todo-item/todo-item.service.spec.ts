import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { GlobalModule } from 'src/common/global.module'
import { TodoListService } from 'src/todo-list/todo-list.service'
import { UserModule } from 'src/user/user.module'

import { TodoItemService } from './todo-item.service'

describe('TodoItemService', () => {
  let service: TodoListService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        GlobalModule,
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
