import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { pbkdf2Sync, randomBytes } from 'crypto'
import * as jwt from 'jsonwebtoken'
import { Model } from 'mongoose'
import { APP_SECRET, ISSUER, TIME } from 'src/constants'
import { UserAuth } from 'src/types'
import { CreateUserInput } from './dto/create-user.input'
import { CreateUserSuccess } from './dto/create-user.output'
import { LoginInput } from './dto/login.input'
import { LoginSuccess } from './dto/login.output'
import { UpdateUserInput } from './dto/update-user.input'
import { User, UserDocument } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  verifyToken(token: string): UserAuth | null {
    const auth = jwt.verify(token, APP_SECRET) as Partial<UserAuth>
    if (auth.iss !== ISSUER) return null
    if (auth.exp < Date.now()) return null
    if (!auth.uid) return null
    return auth as UserAuth
  }

  validPassword(user: User, password: string): boolean {
    return user.password === this.hashPassword(user.salt, password)
  }

  hashPassword(salt: string, password: string): string {
    const hashedPassword = pbkdf2Sync(
      password,
      salt,
      1000,
      64,
      `sha512`
    ).toString(`hex`)
    return hashedPassword
  }

  createToken(user: User, exp?: number): string {
    const issuedAt = Date.now()

    const auth: UserAuth = {
      iss: ISSUER,
      iat: issuedAt,
      exp: exp ?? issuedAt + TIME['1day'],
      uid: user.id,
    }

    const token = jwt.sign(auth, APP_SECRET)

    return token
  }

  async create({
    email,
    password,
  }: CreateUserInput): Promise<CreateUserSuccess> {
    const exist = await this.userModel.findOne({ email })
    if (exist) throw `${email} is already exist`

    const salt = randomBytes(16).toString('hex')
    const hashedPassword = this.hashPassword(salt, password)

    const user = await new this.userModel({
      email,
      salt,
      password: hashedPassword,
      lastLoginAt: new Date(),
    }).save()

    const token = this.createToken(user)

    return {
      user,
      token,
    }
  }

  async login({ email, password }: LoginInput): Promise<LoginSuccess> {
    const user = await this.userModel.findOne({ email })
    if (!user) throw `there is no user with ${email}`
    if (!this.validPassword(user, password)) throw `wrong password!`
    const token = this.createToken(user)
    user.lastLoginAt = new Date()
    await user.save()
    return { token }
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id)
  }

  async update({ id, email, password }: UpdateUserInput): Promise<User> {
    return await this.userModel
      .findByIdAndUpdate(id, { email, password })
      .exec()
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec()
  }
}
