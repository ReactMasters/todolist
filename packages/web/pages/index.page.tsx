import AddItem from '@web/components/AddItem'
import ItemList from '@web/components/ItemList'
import { initializeApollo } from '@web/lib/apollo/client'
import styles from './index.module.scss'
import AddTodoItem from 'components/AddTodoItem'

const Index = () => {
  return (
    <div className={styles.wrapper}>
      <AddItem />
      <ItemList />
      <AddTodoItem></AddTodoItem>
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
