import '@web/lib/global.scss'

import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@web/lib/apollo/client'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}