import { useRouter } from 'next/router'

import { useQuery } from '@apollo/client'
import AuthForm from '@web/components/AuthForm'
import styles from '@web/components/AuthForm/index.module.scss'
import Layout from '@web/components/Layout'
import Title from '@web/components/Title'
import { APP_TITLE } from '@web/lib/constant'
import { AuthPageDocument } from '@web/lib/graphql/query.generated'

const LoginPage = () => {
  const router = useRouter()
  const { data, error, loading } = useQuery(AuthPageDocument)

  if (error) return <div>에러!</div>
  if (!data || loading) return <div>로딩중...</div>
  if (data.me.__typename === 'MeSuccess') {
    router.replace('/')
    return null
  }

  return (
    <Layout title="로그인" className={styles.wrapper}>
      <Title level={2}>{APP_TITLE}</Title>
      <AuthForm type="login" />
    </Layout>
  )
}

export default LoginPage
