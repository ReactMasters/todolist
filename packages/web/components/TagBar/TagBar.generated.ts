import * as Types from '../../lib/graphql/types'

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type TagBar_TagFragment = {
  __typename?: 'Tag'
  id: string
  name: string
}

export const TagBar_TagFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TagBar_Tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TagBar_TagFragment, unknown>
