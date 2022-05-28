import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import { TOKEN_COOKEY_NAME } from 'src/constants'
import { AppContext } from 'src/types'

import { UserService } from './user.service'

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const { req } = ctx.getContext<AppContext>()
    if (req.user) return true

    const token = req.cookies[TOKEN_COOKEY_NAME]
    if (!token) return true

    const auth = this.userService.verifyToken(token)
    if (!auth) return true

    const user = await this.userService.findOne(auth.uid)
    if (!user) return true

    req.user = user
    return true
  }
}
