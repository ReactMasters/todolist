import '@web/styles/global.scss'
import 'antd/dist/antd.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { ApolloProvider } from '@apollo/client'
import { LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDayjs'
import { createTheme, ThemeProvider } from '@mui/material'
import { useApollo } from '@web/lib/apollo/client'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const defaultTheme = createTheme()

  return (
    <ApolloProvider client={apolloClient}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <ThemeProvider theme={defaultTheme}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </LocalizationProvider>
    </ApolloProvider>
  )
}
