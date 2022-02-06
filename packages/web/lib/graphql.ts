export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type CreateUserInput = {
  /** user email */
  email: Scalars['String']
  /** user password */
  password: Scalars['String']
}

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput'
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
  user?: Maybe<User>
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser: CreateUserOutput
  updateUser: User
  removeUser: User
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationRemoveUserArgs = {
  id: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  users: Array<User>
  user: User
}

export type QueryUserArgs = {
  id: Scalars['String']
}

export type UpdateUserInput = {
  email: Scalars['String']
  password: Scalars['String']
  id: Scalars['String']
}

export type User = {
  __typename?: 'User'
  _id: Scalars['String']
  email: Scalars['String']
}
