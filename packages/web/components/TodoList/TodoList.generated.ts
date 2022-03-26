import * as Types from '../../lib/graphql'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type FindTodoListQueryVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type FindTodoListQuery = { __typename?: 'Query' } & {
  findTodoList:
    | ({ __typename?: 'FindTodoListSuccess' } & {
        todoList?: Types.Maybe<
          { __typename?: 'TodoList' } & Pick<Types.TodoList, 'id'> & {
              todos: Array<
                { __typename?: 'TodoItem' } & Pick<
                  Types.TodoItem,
                  'id' | 'dueDateTime' | 'content' | 'status'
                >
              >
            }
        >
      })
    | ({ __typename?: 'FindTodoListError' } & Pick<
        Types.FindTodoListError,
        'message'
      >)
}

export const FindTodoListDocument = gql`
  query FindTodoList($id: String!) {
    findTodoList(findTodoListInput: { id: $id }) {
      ... on FindTodoListSuccess {
        todoList {
          id
          todos {
            id
            dueDateTime
            content
            status
          }
        }
      }
      ... on FindTodoListError {
        message
      }
    }
  }
`

/**
 * __useFindTodoListQuery__
 *
 * To run a query within a React component, call `useFindTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTodoListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindTodoListQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindTodoListQuery,
    FindTodoListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FindTodoListQuery, FindTodoListQueryVariables>(
    FindTodoListDocument,
    options
  )
}
export function useFindTodoListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindTodoListQuery,
    FindTodoListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FindTodoListQuery, FindTodoListQueryVariables>(
    FindTodoListDocument,
    options
  )
}
export type FindTodoListQueryHookResult = ReturnType<
  typeof useFindTodoListQuery
>
export type FindTodoListLazyQueryHookResult = ReturnType<
  typeof useFindTodoListLazyQuery
>
export type FindTodoListQueryResult = Apollo.QueryResult<
  FindTodoListQuery,
  FindTodoListQueryVariables
>
