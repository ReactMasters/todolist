import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { Tag, TagSchema } from 'src/tag/entities/tag.entity'
import { TagModule } from 'src/tag/tag.module'
import { TagService } from 'src/tag/tag.service'
import { TodoItemModule } from 'src/todo-item/todo-item.module'
import { TodoListService } from 'src/todo-list/todo-list.service'
import { User, UserSchema } from 'src/user/entities/user.entity'
import { UserModule } from 'src/user/user.module'
import { UserService } from 'src/user/user.service'

import { TodoList, TodoListSchema } from './entities/todo-list.entity'
import { TodoListResolver } from './todo-list.resolver'

describe('TodoItemService', () => {
  let todoListService: TodoListService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        MongooseModule.forFeature([
          { name: TodoList.name, schema: TodoListSchema },
          ,
        ]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }]),
        UserModule,
        TodoItemModule,
        TagModule,
      ],
      providers: [TodoListResolver, TodoListService, UserService, TagService],
    }).compile()

    todoListService = module.get<TodoListService>(TodoListService)
  })

  it('should be defined', () => {
    expect(todoListService).toBeDefined()
  })

  describe('getTodolistsByUserId', () => {
    it('should work', async () => {
      const todolists = await todoListService.getTodolistsByUserId(
        '623e64270da45ac65b6f71e0'
      )
      expect(todolists).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: expect.any(String) }),
        ])
      )
    })
  })
})
