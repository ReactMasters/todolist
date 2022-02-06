import { gql } from '@apollo/client'
import React from 'react'
import { useUsersPageQuery } from './users.page.generated'

export const query = gql`
  query UsersPage {
    users {
      _id
      email
    }
  }
`
const UsersPage = () => {
  const { data, error, loading } = useUsersPageQuery()
  if (loading) return <div>로딩중</div>
  if (!data || error) return <div>에러!</div>
  return (
    <div>
      {data.users.map(({ _id, email }) => (
        <div key={_id}>
          <span>{_id}</span>
          <span>{email}</span>
        </div>
      ))}
    </div>
  )
}

export default UsersPage
