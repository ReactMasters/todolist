import styles from './LoginHeader.module.scss'

import { APP_TITLE } from '@web/lib/constant'

type Props = {}

const LoginHeader = (props: Props) => {
  return <h1 className={styles.title}>{APP_TITLE}</h1>
}

export default LoginHeader
