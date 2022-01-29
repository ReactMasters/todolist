import AddItem from '@web/components/AddItem'
import ItemList from '@web/components/ItemList'
import { initializeApollo } from '@web/lib/apollo/client'
import { ViewerDocument } from '@web/lib/viewer.graphql'

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
