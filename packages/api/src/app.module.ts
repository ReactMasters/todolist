import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { join } from 'path'
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
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
    }),
    UserModule,
    TagModule,
    TodoItemModule,
    TodoListModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
