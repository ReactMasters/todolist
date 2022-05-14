import Head from 'next/head'

import { APP_TITLE } from '@web/lib/constant'
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
} from 'react'
interface Props extends HTMLAttributes<HTMLDivElement> {}

const Layout: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { title, children, className, ...props },
  ref
) => {
  return (
    <div ref={ref} className={className} {...props}>
      <Head>
        <title>{title ? `${title} : ${APP_TITLE}` : APP_TITLE}</title>
      </Head>
      {children}
    </div>
  )
}

export default forwardRef(Layout)
