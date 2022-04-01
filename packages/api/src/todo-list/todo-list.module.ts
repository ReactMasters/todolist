import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/user/entities/user.entity'
import { UserModule } from 'src/user/user.module'
import { UserService } from 'src/user/user.service'
import { TodoList, TodoListSchema } from './entities/todo-list.entity'
import { TodoListResolver } from './todo-list.resolver'
import { TodoListService } from './todo-list.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoList.name, schema: TodoListSchema },
      ,
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
  ],
  providers: [TodoListResolver, TodoListService, UserService],
})
export class TodoListModule {}
