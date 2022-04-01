import * as Types from '../../lib/graphql'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type LoginPageQueryVariables = Types.Exact<{ [key: string]: never }>

export type LoginPageQuery = { __typename?: 'Query' } & {
  me:
    | ({ __typename: 'MeSuccess' } & {
        user: { __typename?: 'User' } & Pick<Types.User, 'id' | 'email'>
      })
    | ({ __typename: 'MeError' } & Pick<Types.MeError, 'message'>)
}

export const LoginPageDocument = gql`
  query LoginPage {
    me {
      __typename
      ... on MeError {
        message
      }
      ... on MeSuccess {
        user {
          id
          email
        }
      }
    }
  }
`

/**
 * __useLoginPageQuery__
 *
 * To run a query within a React component, call `useLoginPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginPageQuery(
  baseOptions?: Apollo.QueryHookOptions<LoginPageQuery, LoginPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LoginPageQuery, LoginPageQueryVariables>(
    LoginPageDocument,
    options
  )
}
export function useLoginPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoginPageQuery,
    LoginPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LoginPageQuery, LoginPageQueryVariables>(
    LoginPageDocument,
    options
  )
}
export type LoginPageQueryHookResult = ReturnType<typeof useLoginPageQuery>
export type LoginPageLazyQueryHookResult = ReturnType<
  typeof useLoginPageLazyQuery
>
export type LoginPageQueryResult = Apollo.QueryResult<
  LoginPageQuery,
  LoginPageQueryVariables
>
