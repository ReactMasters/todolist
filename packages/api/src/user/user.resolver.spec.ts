import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { GlobalModule } from 'src/common/global.module'
import { TodoListService } from 'src/todo-list/todo-list.service'

import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
describe('UserResolver', () => {
  let resolver: UserResolver

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        GlobalModule,
      ],
      providers: [UserResolver, UserService, TodoListService],
    }).compile()

    resolver = module.get<UserResolver>(UserResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
