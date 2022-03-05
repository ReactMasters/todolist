import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TodoItem, TodoItemSchema } from './entities/todo-item.entity'
import { TodoItemResolver } from './todo-item.resolver'
import { TodoItemService } from './todo-item.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoItem.name, schema: TodoItemSchema },
    ]),
  ],
  providers: [TodoItemResolver, TodoItemService],
})
export class TodoItemModule {}
