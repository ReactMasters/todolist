import '@web/lib/global.scss'

import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@web/lib/apollo/client'

import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../utils/muiTheme'

interface Props extends AppProps {
  emotionCache?: EmotionCache
}

export default function App({ Component, pageProps, emotionCache }: Props) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  )
}
