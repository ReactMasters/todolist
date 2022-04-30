import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

import * as Types from '../../lib/graphql/types'
import { TagBar_TagFragmentDoc } from '../TagBar/TagBar.generated'
export type TodoItem_TodoItemFragment = {
  __typename?: 'TodoItem'
  id: string
  content: string
  status: Types.TodoStatus
  dueDateTime?: any | null
  tags: Array<{ __typename?: 'Tag'; id: string; name: string }>
}

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
  ],
} as unknown as DocumentNode<TodoItem_TodoItemFragment, unknown>
