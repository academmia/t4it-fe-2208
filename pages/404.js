import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from "../components/core/layout/Layout"
import styles from "../styles/404.module.scss"

const NotFoundPage = () => {
  return (
    <Layout title='Page Not Found'>
        <div className={styles.error}>
            <h1> <FaExclamationTriangle /> 404</h1>
            <h4>Page not found</h4>
            <Link href='/'>Start here</Link>
        </div>
    </Layout>
  )
}

export default NotFoundPage
