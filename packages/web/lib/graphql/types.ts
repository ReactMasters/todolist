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

export type AddTagInput = {
  name: Scalars['String']
}

export type AddTagOutput = {
  __typename?: 'AddTagOutput'
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
  tag?: Maybe<Tag>
}

export type CreateTodoItemError = {
  __typename?: 'CreateTodoItemError'
  message: Scalars['String']
}

export type CreateTodoItemInput = {
  todoListId: Scalars['String']
  content: Scalars['String']
  status?: Maybe<Scalars['String']>
  dueDateTime?: Maybe<Scalars['DateTime']>
}

export type CreateTodoItemOutput = CreateTodoItemSuccess | CreateTodoItemError

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
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
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

export type CreateUserOutput = CreateUserSuccess | CreateUserError

export type CreateUserSuccess = {
  __typename?: 'CreateUserSuccess'
  user: User
  /** JWT when create user success */
  token: Scalars['String']
  todoList: TodoList
}

export type FindTodoListError = {
  __typename?: 'FindTodoListError'
  message: Scalars['String']
}

export type FindTodoListInput = {
  id: Scalars['String']
}

export type FindTodoListOutput = FindTodoListSuccess | FindTodoListError

export type FindTodoListSuccess = {
  __typename?: 'FindTodoListSuccess'
  todoList?: Maybe<TodoList>
}

export type ListTagsOutput = {
  __typename?: 'ListTagsOutput'
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
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

export type LoginOutput = LoginSuccess | LoginError

export type LoginSuccess = {
  __typename?: 'LoginSuccess'
  token: Scalars['String']
}

export type MeError = {
  __typename?: 'MeError'
  message: Scalars['String']
}

export type MeOutput = MeSuccess | MeError

export type MeSuccess = {
  __typename?: 'MeSuccess'
  user: User
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser: CreateUserOutput
  login: LoginOutput
  updateUser: User
  removeUser: User
  addTag: AddTagOutput
  createTodoItem: CreateTodoItemOutput
  createTodoList: CreateTodoListOutput
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationLoginArgs = {
  loginInput: LoginInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationRemoveUserArgs = {
  id: Scalars['String']
}

export type MutationAddTagArgs = {
  addTagInput: AddTagInput
}

export type MutationCreateTodoItemArgs = {
  createTodoItemInput: CreateTodoItemInput
}

export type MutationCreateTodoListArgs = {
  createTodoListInput: CreateTodoListInput
}

export type Query = {
  __typename?: 'Query'
  me: MeOutput
  users: Array<User>
  user: User
  listTags: ListTagsOutput
  findTodoList: FindTodoListOutput
}

export type QueryUserArgs = {
  id: Scalars['String']
}

export type QueryFindTodoListArgs = {
  findTodoListInput: FindTodoListInput
}

export type Tag = {
  __typename?: 'Tag'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
  owner: User
}

export type TodoItem = {
  __typename?: 'TodoItem'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  content: Scalars['String']
  status: TodoStatus
  tags: Array<Tag>
  dueDateTime?: Maybe<Scalars['DateTime']>
}

export type TodoList = {
  __typename?: 'TodoList'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
  todos: Array<TodoItem>
  owners: Array<User>
}

export enum TodoStatus {
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>
  /** user password */
  password?: Maybe<Scalars['String']>
  id: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  lastLoginAt?: Maybe<Scalars['DateTime']>
}
