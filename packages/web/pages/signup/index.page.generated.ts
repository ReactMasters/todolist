import * as Types from '../../lib/graphql'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type SignupPageMutationVariables = Types.Exact<{
  createUserInput: Types.CreateUserInput
}>

export type SignupPageMutation = { __typename?: 'Mutation' } & {
  createUser:
    | ({ __typename: 'CreateUserSuccess' } & Pick<
        Types.CreateUserSuccess,
        'token'
      > & { user: { __typename?: 'User' } & Pick<Types.User, 'id'> })
    | ({ __typename: 'CreateUserError' } & Pick<
        Types.CreateUserError,
        'message'
      >)
}

export const SignupPageDocument = gql`
  mutation SignupPage($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      __typename
      ... on CreateUserError {
        message
      }
      ... on CreateUserSuccess {
        user {
          id
        }
        token
      }
    }
  }
`
export type SignupPageMutationFn = Apollo.MutationFunction<
  SignupPageMutation,
  SignupPageMutationVariables
>

/**
 * __useSignupPageMutation__
 *
 * To run a mutation, you first call `useSignupPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupPageMutation, { data, loading, error }] = useSignupPageMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useSignupPageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupPageMutation,
    SignupPageMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SignupPageMutation, SignupPageMutationVariables>(
    SignupPageDocument,
    options
  )
}
export type SignupPageMutationHookResult = ReturnType<
  typeof useSignupPageMutation
>
export type SignupPageMutationResult = Apollo.MutationResult<SignupPageMutation>
export type SignupPageMutationOptions = Apollo.BaseMutationOptions<
  SignupPageMutation,
  SignupPageMutationVariables
>
