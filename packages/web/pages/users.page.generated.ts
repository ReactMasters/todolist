import * as Types from '../lib/graphql'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type UsersPageQueryVariables = Types.Exact<{ [key: string]: never }>

export type UsersPageQuery = { __typename?: 'Query' } & {
  users: Array<
    { __typename?: 'User' } & Pick<
      Types.User,
      'id' | 'email' | 'createdAt' | 'updatedAt' | 'lastLoginAt'
    >
  >
}

export const UsersPageDocument = gql`
  query UsersPage {
    users {
      id
      email
      createdAt
      updatedAt
      lastLoginAt
    }
  }
`

/**
 * __useUsersPageQuery__
 *
 * To run a query within a React component, call `useUsersPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersPageQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersPageQuery, UsersPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersPageQuery, UsersPageQueryVariables>(
    UsersPageDocument,
    options
  )
}
export function useUsersPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersPageQuery,
    UsersPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersPageQuery, UsersPageQueryVariables>(
    UsersPageDocument,
    options
  )
}
export type UsersPageQueryHookResult = ReturnType<typeof useUsersPageQuery>
export type UsersPageLazyQueryHookResult = ReturnType<
  typeof useUsersPageLazyQuery
>
export type UsersPageQueryResult = Apollo.QueryResult<
  UsersPageQuery,
  UsersPageQueryVariables
>
