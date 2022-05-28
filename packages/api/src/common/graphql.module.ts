import { join } from 'path'

import { DynamicModule, Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { ALLOW_ORIGIN_REGEX } from 'src/constants'

@Module({})
export class AppGraphQLModule {
  static forRoot(): DynamicModule {
    return GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
      cors: {
        credentials: true,
        origin: ALLOW_ORIGIN_REGEX,
      },
    })
  }
}
