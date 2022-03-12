import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AppContext } from 'src/types'

export const CurrentUser = createParamDecorator(
  (_: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context)
    const { req } = ctx.getContext<AppContext>()
    return req.user
  }
)
