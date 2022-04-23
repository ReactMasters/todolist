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

export type AddTodoItemError = {
  __typename?: 'AddTodoItemError'
  message: Scalars['String']
}

export type AddTodoItemInput = {
  todoListId: Scalars['String']
  content: Scalars['String']
  status?: Maybe<Scalars['String']>
  dueDateTime?: Maybe<Scalars['DateTime']>
}

export type AddTodoItemOutput = AddTodoItemSuccess | AddTodoItemError

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
  success: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
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
  signup: SignupOutput
  signin: SigninOutput
  addTag: AddTagOutput
  addTodoItem: AddTodoItemOutput
  addTodoList: AddTodoListOutput
}

export type MutationSignupArgs = {
  signupInput: SignupInput
}

export type MutationSigninArgs = {
  signinInput: SigninInput
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

export type Query = {
  __typename?: 'Query'
  me: MeOutput
  users: Array<User>
  user: User
  listTags: ListTagsOutput
  todoItems: TodoItemsOutput
  findTodoList: FindTodoListOutput
}

export type QueryUserArgs = {
  id: Scalars['String']
}

export type QueryTodoItemsArgs = {
  todoItemsInput: TodoItemsInput
}

export type QueryFindTodoListArgs = {
  findTodoListInput: FindTodoListInput
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

export type SigninOutput = SigninSuccess | SigninError

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

export type SignupOutput = SignupSuccess | SignupError

export type SignupSuccess = {
  __typename?: 'SignupSuccess'
  user: User
  /** JWT when create user success */
  token: Scalars['String']
  todoList: TodoList
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

export type TodoItemsError = {
  __typename?: 'TodoItemsError'
  message: Scalars['String']
}

export type TodoItemsInput = {
  todoListId: Scalars['ID']
  tagIds?: Maybe<Array<Scalars['ID']>>
}

export type TodoItemsOutput = TodoItemsSuccess | TodoItemsError

export type TodoItemsSuccess = {
  __typename?: 'TodoItemsSuccess'
  totalCount: Scalars['Int']
  items: Array<TodoItem>
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
  id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  lastLoginAt?: Maybe<Scalars['DateTime']>
}
