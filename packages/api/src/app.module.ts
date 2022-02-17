import { join } from 'path'

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { TodoModule } from './todo/todo.module'
import { TagModule } from './tag/tag.module'
import { TodoGroupModule } from './todo-group/todo-group.module'

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
    TodoModule,
    TodoGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
