import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '@web/utiils/createEmotionCache'

function Document() {
  return (
    <Html lang="en">
      <Head>{(this.props as any).emotionStyleTags}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}

export default Document
