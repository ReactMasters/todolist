import { gql } from '@apollo/client'
import { Tag } from 'antd'
import React from 'react'
import styles from 'TagBar.module.scss'
import { TagBar_TagFragment } from './TagBar.generated'

interface Props {
  tags: TagBar_TagFragment[]
}

const TagBar = ({ tags = [] }: Props) => {
  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.name}</Tag>
      ))}
    </div>
  )
}

TagBar.fragments = {
  tag: gql`
    fragment TagBar_Tag on Tag {
      id
      name
    }
  `,
}

export default TagBar
