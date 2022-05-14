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
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
  tag?: Maybe<Tag>
}

export type AddTodoItemError = {
  __typename?: 'AddTodoItemError'
  message: Scalars['String']
}

export type AddTodoItemInput = {
  content: Scalars['String']
  dueDateTime?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
  todoListId: Scalars['String']
}

export type AddTodoItemOutput = AddTodoItemError | AddTodoItemSuccess

export type AddTodoItemSuccess = {
  __typename?: 'AddTodoItemSuccess'
  todoItem: TodoItem
}

export type AddTodoListInput = {
  name: Scalars['String']
  owners: Array<Scalars['String']>
}

export type AddTodoListOutput = {
  __typename?: 'AddTodoListOutput'
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
  todoList: TodoList
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
  todoList?: Maybe<TodoList>
}

export type ListTagsOutput = {
  __typename?: 'ListTagsOutput'
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
  tags: Array<Tag>
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
  addTag: AddTagOutput
  addTodoItem: AddTodoItemOutput
  addTodoList: AddTodoListOutput
  signin: SigninOutput
  signup: SignupOutput
}

export type MutationAddTagArgs = {
  addTagInput: AddTagInput
}

export type MutationAddTodoItemArgs = {
  addTodoItemInput: AddTodoItemInput
}

export type MutationAddTodoListArgs = {
  addTodoListInput: AddTodoListInput
}

export type MutationSigninArgs = {
  signinInput: SigninInput
}

export type MutationSignupArgs = {
  signupInput: SignupInput
}

export type Query = {
  __typename?: 'Query'
  findTodoList: FindTodoListOutput
  listTags: ListTagsOutput
  me: MeOutput
  todoItem?: Maybe<TodoItem>
  todoItems: TodoItemsOutput
  user: User
  users: Array<User>
}

export type QueryFindTodoListArgs = {
  findTodoListInput: FindTodoListInput
}

export type QueryTodoItemArgs = {
  id: Scalars['String']
}

export type QueryTodoItemsArgs = {
  todoItemsInput: TodoItemsInput
}

export type QueryUserArgs = {
  id: Scalars['String']
}

export type SigninError = {
  __typename?: 'SigninError'
  message: Scalars['String']
}

export type SigninInput = {
  /** user email */
  email: Scalars['String']
  /** user password */
  password: Scalars['String']
}

export type SigninOutput = SigninError | SigninSuccess

export type SigninSuccess = {
  __typename?: 'SigninSuccess'
  token: Scalars['String']
}

export type SignupError = {
  __typename?: 'SignupError'
  message: Scalars['String']
}

export type SignupInput = {
  /** user email */
  email: Scalars['String']
  /** user password */
  password: Scalars['String']
}

export type SignupOutput = SignupError | SignupSuccess

export type SignupSuccess = {
  __typename?: 'SignupSuccess'
  todoList: TodoList
  /** JWT when create user success */
  token: Scalars['String']
  user: User
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
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  content: Scalars['String']
  status: TodoStatus
  tags: Array<Tag>
  dueDateTime?: Maybe<Scalars['DateTime']>
  todoList: TodoList
}

export type TodoItemsError = {
  __typename?: 'TodoItemsError'
  message: Scalars['String']
}

export type TodoItemsInput = {
  tagIds?: Maybe<Array<Scalars['ID']>>
  todoListId: Scalars['ID']
}

export type TodoItemsOutput = TodoItemsError | TodoItemsSuccess

export type TodoItemsSuccess = {
  __typename?: 'TodoItemsSuccess'
  items: Array<TodoItem>
  totalCount: Scalars['Int']
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

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  id: Scalars['ID']
  lastLoginAt?: Maybe<Scalars['DateTime']>
  updatedAt: Scalars['DateTime']
}
