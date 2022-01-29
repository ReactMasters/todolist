import AddItem from '../components/AddItem'
import ItemList from '../components/ItemList'
import { initializeApollo } from '../lib/apollo/client'
import { ViewerDocument } from '../lib/viewer.graphql'
import styles from './index.module.scss'
const Index = () => {
  return (
    <div className={styles.wrapper}>
      <AddItem />
      <ItemList />
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
