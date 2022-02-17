import { gql } from '@apollo/client'
import React from 'react'
import { useUsersPageQuery } from './users.page.generated'

export const query = gql`
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
const UsersPage = () => {
  const { data, error, loading } = useUsersPageQuery()
  if (loading) return <div>로딩중</div>
  if (!data || error) return <div>에러!</div>
  return (
    <div>
      {data.users.map(({ id, email, createdAt, updatedAt, lastLoginAt }) => (
        <div key={id}>
          <span>{id}</span>
          <span>{email}</span>
          <span>{createdAt}</span>
          <span>{updatedAt}</span>
          <span>{lastLoginAt}</span>
        </div>
      ))}
    </div>
  )
}

export default UsersPage
