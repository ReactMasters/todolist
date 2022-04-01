import { gql, useQuery } from '@apollo/client'
import AddItem from '@web/components/AddItem'
import TodoItemList from '@web/components/TodoItemList'
import { initializeApollo } from '@web/lib/apollo/client'

import styles from './index.module.scss'
import 'antd/dist/antd.css'
import { Button } from 'antd'

const Index = () => {
  return (
    <div className={styles.wrapper}>
      <AddItem />
      <Button>Antd</Button>
      <TodoItemList />
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  // await apolloClient.query({
  //   query: ViewerDocument,
  // })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
