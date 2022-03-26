import * as Types from '../lib/graphql'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type IndexPageQueryVariables = Types.Exact<{ [key: string]: never }>

export type IndexPageQuery = { __typename?: 'Query' } & {
  me:
    | ({ __typename?: 'MeSuccess' } & {
        user: { __typename?: 'User' } & Pick<
          Types.User,
          'id' | 'email' | 'lastLoginAt'
        >
      })
    | ({ __typename?: 'MeError' } & Pick<Types.MeError, 'message'>)
}

export const IndexPageDocument = gql`
  query IndexPage {
    me {
      ... on MeError {
        message
      }
      ... on MeSuccess {
        user {
          id
          email
          lastLoginAt
        }
      }
    }
  }
`

/**
 * __useIndexPageQuery__
 *
 * To run a query within a React component, call `useIndexPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexPageQuery(
  baseOptions?: Apollo.QueryHookOptions<IndexPageQuery, IndexPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IndexPageQuery, IndexPageQueryVariables>(
    IndexPageDocument,
    options
  )
}
export function useIndexPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IndexPageQuery,
    IndexPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IndexPageQuery, IndexPageQueryVariables>(
    IndexPageDocument,
    options
  )
}
export type IndexPageQueryHookResult = ReturnType<typeof useIndexPageQuery>
export type IndexPageLazyQueryHookResult = ReturnType<
  typeof useIndexPageLazyQuery
>
export type IndexPageQueryResult = Apollo.QueryResult<
  IndexPageQuery,
  IndexPageQueryVariables
>
