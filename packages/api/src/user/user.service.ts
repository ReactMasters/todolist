import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { pbkdf2Sync, randomBytes } from 'crypto'
import * as jwt from 'jsonwebtoken'
import { Model } from 'mongoose'
import { ISSUER, TIME } from 'src/constants'
import { CreateUserInput } from './dto/create-user.input'
import { CreateUserSuccess } from './dto/create-user.output'
import { UpdateUserInput } from './dto/update-user.input'
import { User, UserDocument } from './entities/user.entity'
import { UserAuth } from './user.interface'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  hashPassword(password: string): { salt: string; hashedPassword: string } {
    const salt = randomBytes(16).toString('hex')
    const hashedPassword = pbkdf2Sync(
      password,
      salt,
      1000,
      64,
      `sha512`
    ).toString(`hex`)

    return {
      salt,
      hashedPassword,
    }
  }

  createToken(user: User, exp?: number): string {
    const issuedAt = Date.now()

    const auth: UserAuth = {
      iss: ISSUER,
      iat: issuedAt,
      exp: exp ?? issuedAt + TIME['1day'],
      uid: user.id,
    }

    const token = jwt.sign(auth, process.env.APP_SECRET as string)

    return token
  }

  async create({
    email,
    password,
  }: CreateUserInput): Promise<CreateUserSuccess> {
    const exist = await this.userModel.findOne({ email })
    if (exist) throw `${email} is already exist`

    const { salt, hashedPassword } = this.hashPassword(password)

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
