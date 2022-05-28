import { Global, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Tag, TagSchema } from 'src/tag/entities/tag.entity'
import {
  TodoItem,
  TodoItemSchema,
} from 'src/todo-item/entities/todo-item.entity'
import {
  TodoList,
  TodoListSchema,
} from 'src/todo-list/entities/todo-list.entity'
import { User, UserSchema } from 'src/user/entities/user.entity'

const AllSchemaModule = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
  { name: Tag.name, schema: TagSchema },
  { name: TodoList.name, schema: TodoListSchema },
  { name: TodoItem.name, schema: TodoItemSchema },
])

@Global()
@Module({
  imports: [AllSchemaModule],
  exports: [AllSchemaModule],
})
export class DatabaseModule {}
