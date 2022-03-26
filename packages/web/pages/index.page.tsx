import AddItem from '@web/components/AddItem'
import Header from '@web/components/Header/Header'
import ItemList from '@web/components/ItemList'
import TodoList from '@web/components/TodoList/TodoList'
import { initializeApollo } from '@web/lib/apollo/client'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import styles from './index.module.scss'

const Index = () => {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <TodoList todoListId="623e45133f4c5d61e137a573"></TodoList>
        <AddItem />
        <Button>Antd</Button>
        <ItemList />
      </div>
    </>
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
