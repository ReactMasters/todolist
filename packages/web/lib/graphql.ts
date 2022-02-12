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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type CreateTagInput = {
  name: Scalars['String']
}

export type CreateTagOutput = {
  __typename?: 'CreateTagOutput'
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
  tag?: Maybe<Tag>
}

export type CreateTodoGroupInput = {
  name: Scalars['String']
}

export type CreateTodoGroupOutput = {
  __typename?: 'CreateTodoGroupOutput'
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
  todoGroup: TodoGroup
}

export type CreateTodoInput = {
  content: Scalars['String']
  todoStatus?: Maybe<Scalars['String']>
  dueDateTime?: Maybe<Scalars['DateTime']>
}

export type CreateTodoOutput = {
  __typename?: 'CreateTodoOutput'
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
  todo?: Maybe<Todo>
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

export type ListTagsOutput = {
  __typename?: 'ListTagsOutput'
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
  tags: Array<Tag>
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser: CreateUserOutput
  updateUser: User
  removeUser: User
  createTag: CreateTagOutput
  createTodo: CreateTodoOutput
  createTodoGroup: CreateTodoGroupOutput
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

export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput
}

export type MutationCreateTodoArgs = {
  createTodoInput: CreateTodoInput
}

export type MutationCreateTodoGroupArgs = {
  createTodoGroupInput: CreateTodoGroupInput
}

export type Query = {
  __typename?: 'Query'
  users: Array<User>
  user: User
  listTags: ListTagsOutput
}

export type QueryUserArgs = {
  id: Scalars['String']
}

export type Tag = {
  __typename?: 'Tag'
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  _id: Scalars['ID']
  name: Scalars['String']
  owner: User
}

export type Todo = {
  __typename?: 'Todo'
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  _id: Scalars['ID']
  content: Scalars['String']
  todoStatus: TodoStatus
  tags: Array<Tag>
  dueDateTime?: Maybe<Scalars['DateTime']>
}

export type TodoGroup = {
  __typename?: 'TodoGroup'
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  _id: Scalars['ID']
  name: Scalars['String']
  todos: Array<Todo>
  owners: Array<User>
}

export enum TodoStatus {
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}

export type UpdateUserInput = {
  email: Scalars['String']
  password: Scalars['String']
  id: Scalars['String']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  _id: Scalars['ID']
  email: Scalars['String']
  lastLoginAt?: Maybe<Scalars['DateTime']>
}
