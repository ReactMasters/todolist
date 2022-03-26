import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import { ALLOW_ORIGIN_REGEX } from './constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    credentials: true,
    origin: ALLOW_ORIGIN_REGEX,
  })
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 4000)
}
bootstrap()
