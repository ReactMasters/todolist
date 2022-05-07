import { gql } from '@apollo/client'
import { Tag } from 'antd'
import React from 'react'
import styles from 'TagBar.module.scss'
import { TagBar_TagFragment } from './TagBar.generated'
import tagColors from './TagColors'

interface Props {
  tags: TagBar_TagFragment[]
}

const TagBar = ({ tags = [] }: Props) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Tag color={tagColors[index % tagColors.length]} key={tag.id}>
          {tag.name}
        </Tag>
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
