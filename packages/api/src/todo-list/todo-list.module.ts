import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TodoList, TodoListSchema } from './entities/todo-list.entity'
import { TodoListResolver } from './todo-list.resolver'
import { TodoListService } from './todo-list.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoList.name, schema: TodoListSchema },
    ]),
  ],
  providers: [TodoListResolver, TodoListService],
})
export class TodoListModule {}
