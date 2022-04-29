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
  DateTime: string
}

export type CreateTagInput = {
  name: Scalars['String']
}

export type CreateTagOutput = {
  __typename?: 'CreateTagOutput'
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
  tag?: Maybe<Tag>
}

export type CreateTodoItemError = {
  __typename?: 'CreateTodoItemError'
  message: Scalars['String']
}

export type CreateTodoItemInput = {
  content: Scalars['String']
  dueDateTime?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
  todoListId: Scalars['String']
}

export type CreateTodoItemOutput = CreateTodoItemError | CreateTodoItemSuccess

export type CreateTodoItemSuccess = {
  __typename?: 'CreateTodoItemSuccess'
  todoItem: TodoItem
}

export type CreateTodoListInput = {
  name: Scalars['String']
  owners: Array<Scalars['String']>
}

export type CreateTodoListOutput = {
  __typename?: 'CreateTodoListOutput'
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
  todoList: TodoList
}

export type CreateUserError = {
  __typename?: 'CreateUserError'
  message: Scalars['String']
}

export type CreateUserInput = {
  /** user email */
  email: Scalars['String']
  /** user password */
  password: Scalars['String']
}

export type CreateUserOutput = CreateUserError | CreateUserSuccess

export type CreateUserSuccess = {
  __typename?: 'CreateUserSuccess'
  todoList: TodoList
  /** JWT when create user success */
  token: Scalars['String']
  user: User
}

export type FindTodoListError = {
  __typename?: 'FindTodoListError'
  message: Scalars['String']
}

export type FindTodoListInput = {
  id: Scalars['String']
}

export type FindTodoListOutput = FindTodoListError | FindTodoListSuccess

export type FindTodoListSuccess = {
  __typename?: 'FindTodoListSuccess'
  tags: Array<Tag>
  todoList?: Maybe<TodoList>
}

export type ListTagsOutput = {
  __typename?: 'ListTagsOutput'
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
  tags: Array<Tag>
}

export type LoginError = {
  __typename?: 'LoginError'
  message: Scalars['String']
}

export type LoginInput = {
  /** user email */
  email: Scalars['String']
  /** user password */
  password: Scalars['String']
}

export type LoginOutput = LoginError | LoginSuccess

export type LoginSuccess = {
  __typename?: 'LoginSuccess'
  token: Scalars['String']
}

export type MeError = {
  __typename?: 'MeError'
  message: Scalars['String']
}

export type MeOutput = MeError | MeSuccess

export type MeSuccess = {
  __typename?: 'MeSuccess'
  user: User
}

export type Mutation = {
  __typename?: 'Mutation'
  createTag: CreateTagOutput
  createTodoItem: CreateTodoItemOutput
  createTodoList: CreateTodoListOutput
  createUser: CreateUserOutput
  login: LoginOutput
  removeUser: User
  updateUser: User
}

export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput
}

export type MutationCreateTodoItemArgs = {
  createTodoItemInput: CreateTodoItemInput
}

export type MutationCreateTodoListArgs = {
  createTodoListInput: CreateTodoListInput
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationLoginArgs = {
  loginInput: LoginInput
}

export type MutationRemoveUserArgs = {
  id: Scalars['String']
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type Query = {
  __typename?: 'Query'
  findTodoList: FindTodoListOutput
  listTags: ListTagsOutput
  me: MeOutput
  user: User
  users: Array<User>
}

export type QueryFindTodoListArgs = {
  findTodoListInput: FindTodoListInput
}

export type QueryUserArgs = {
  id: Scalars['String']
}

export type Tag = {
  __typename?: 'Tag'
  createdAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  name: Scalars['String']
  owner: User
  updatedAt: Scalars['DateTime']
}

export type TodoItem = {
  __typename?: 'TodoItem'
  content: Scalars['String']
  createdAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  dueDateTime?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  status: TodoStatus
  tags: Array<Tag>
  updatedAt: Scalars['DateTime']
}

export type TodoList = {
  __typename?: 'TodoList'
  createdAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  name: Scalars['String']
  owners: Array<User>
  todos: Array<TodoItem>
  updatedAt: Scalars['DateTime']
}

export enum TodoStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
}

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>
  id: Scalars['String']
  /** user password */
  password?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  id: Scalars['ID']
  lastLoginAt?: Maybe<Scalars['DateTime']>
  updatedAt: Scalars['DateTime']
}
