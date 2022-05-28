import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import {
  TodoList,
  TodoListSchema,
} from 'src/todo-list/entities/todo-list.entity'
import { TodoListService } from 'src/todo-list/todo-list.service'

import { User, UserSchema } from './entities/user.entity'
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
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([
          { name: TodoList.name, schema: TodoListSchema },
        ]),
      ],
      providers: [UserResolver, UserService, TodoListService],
    }).compile()

    resolver = module.get<UserResolver>(UserResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
