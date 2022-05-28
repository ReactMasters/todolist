import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { DatabaseModule } from './common/database.module'
import { AppGraphQLModule } from './common/graphql.module'
import { TagModule } from './tag/tag.module'
import { TodoItemModule } from './todo-item/todo-item.module'
import { TodoListModule } from './todo-list/todo-list.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AppGraphQLModule.forRoot(),
    DatabaseModule,
    UserModule,
    TagModule,
    TodoItemModule,
    TodoListModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
