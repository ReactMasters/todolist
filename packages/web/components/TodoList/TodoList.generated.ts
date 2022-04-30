import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

import * as Types from '../../lib/graphql/types'
import { TagBar_TagFragmentDoc } from '../TagBar/TagBar.generated'
import { TodoItem_TodoItemFragmentDoc } from '../TodoItem/TodoItem.generated'
export type FindTodoListQueryVariables = Types.Exact<{
  input: Types.FindTodoListInput
}>

export type FindTodoListQuery = {
  __typename?: 'Query'
  findTodoList:
    | { __typename?: 'FindTodoListError'; message: string }
    | {
        __typename?: 'FindTodoListSuccess'
        todoList?: {
          __typename?: 'TodoList'
          id: string
          todos: Array<{
            __typename?: 'TodoItem'
            id: string
            content: string
            status: Types.TodoStatus
            dueDateTime?: any | null
            tags: Array<{ __typename?: 'Tag'; id: string; name: string }>
          }>
        } | null
        tags: Array<{ __typename?: 'Tag'; id: string; name: string }>
      }
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tags' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'TagBar_Tag' },
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
    ...TagBar_TagFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<FindTodoListQuery, FindTodoListQueryVariables>
