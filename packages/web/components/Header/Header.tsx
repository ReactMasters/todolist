import { MoreOutlined } from '@ant-design/icons'
import { Dropdown, PageHeader, Row, Typography } from 'antd'
import React from 'react'

const Header = () => {
  const dropdownItems = (
    <div data-testid="dropdown-menu">
      <Typography>Menu1</Typography>
      <Typography>Menu2</Typography>
      <Typography>Menu3</Typography>
      <Typography>Menu4</Typography>
    </div>
  )
  return (
    <PageHeader>
      <Row justify="end">
        <Dropdown overlay={dropdownItems}>
          <div data-testid="menu-button">
            <MoreOutlined />
          </div>
        </Dropdown>
      </Row>
    </PageHeader>
  )
}

export default Header
