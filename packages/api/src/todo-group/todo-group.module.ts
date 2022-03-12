import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TodoGroup, TodoGroupSchema } from './entities/todo_group.entity'
import { TodoGroupResolver } from './todo-group.resolver'
import { TodoGroupService } from './todo-group.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoGroup.name, schema: TodoGroupSchema },
    ]),
  ],
  providers: [TodoGroupResolver, TodoGroupService],
})
export class TodoGroupModule {}
