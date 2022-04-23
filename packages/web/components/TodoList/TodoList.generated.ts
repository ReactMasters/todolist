import * as Types from '../../lib/graphql/types'

import { TodoItem_TodoItemFragment } from '../TodoItem/TodoItem.generated'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import { TodoItem_TodoItemFragmentDoc } from '../TodoItem/TodoItem.generated'
export type FindTodoListQueryVariables = Types.Exact<{
  input: Types.FindTodoListInput
}>

export type FindTodoListQuery = { __typename?: 'Query' } & {
  findTodoList:
    | ({ __typename?: 'FindTodoListSuccess' } & {
        todoList?: Types.Maybe<
          { __typename?: 'TodoList' } & Pick<Types.TodoList, 'id'> & {
              todos: Array<
                { __typename?: 'TodoItem' } & TodoItem_TodoItemFragment
              >
            }
        >
      })
    | ({ __typename?: 'FindTodoListError' } & Pick<
        Types.FindTodoListError,
        'message'
      >)
}

export const FindTodoListDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindTodoList' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'FindTodoListInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findTodoList' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'findTodoListInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'FindTodoListSuccess' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'todoList' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'todos' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'TodoItem_TodoItem',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'FindTodoListError' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'message' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TodoItem_TodoItemFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<FindTodoListQuery, FindTodoListQueryVariables>
