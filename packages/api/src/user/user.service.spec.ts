import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { GlobalModule } from 'src/common/global.module'

import { UserService } from './user.service'

describe('UserService', () => {
  let service: UserService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        GlobalModule,
      ],
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
