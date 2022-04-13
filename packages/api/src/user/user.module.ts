import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
  TodoList,
  TodoListSchema,
} from 'src/todo-list/entities/todo-list.entity'
import { TodoListService } from 'src/todo-list/todo-list.service'
import { User, UserSchema } from './entities/user.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: TodoList.name, schema: TodoListSchema },
    ]),
  ],
  providers: [UserResolver, UserService, TodoListService],
})
export class UserModule {}
