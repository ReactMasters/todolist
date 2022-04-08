import { gql } from '@apollo/client'

const AuthPage = gql`
  query AuthPage {
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
