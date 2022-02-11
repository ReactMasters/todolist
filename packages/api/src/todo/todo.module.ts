import { Module } from '@nestjs/common'
import { TodoService } from './todo.service'
import { TodoResolver } from './todo.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { Todo, TodoSchema } from './entities/todo.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  providers: [TodoResolver, TodoService],
})
export class TodoModule { }
