import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

import * as Types from '../../lib/graphql/types'

export type TodoItem_TodoItemFragment = { __typename?: 'TodoItem' } & Pick<
  Types.TodoItem,
  'id' | 'content' | 'status' | 'dueDateTime'
> & { tags: Array<{ __typename?: 'Tag' } & Pick<Types.Tag, 'id' | 'name'>> }

export const TodoItem_TodoItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TodoItem_TodoItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TodoItem' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dueDateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TodoItem_TodoItemFragment, unknown>
