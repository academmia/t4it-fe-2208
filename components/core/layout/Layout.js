import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import HeroBanner from '@/components/hero-banner/HeroBanner'

import styles from './Layout.module.scss'

const Layout = ({title, keywords, description, children}) => {

  const router = useRouter()

  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
    </Head>
    
    <Header />

    { router.pathname === '/' && <HeroBanner /> }

    <div className={styles.container}>
        
        {children}

    </div>

    <Footer />

    </>
  )
}

Layout.defaultProps = {
    title: 'Software Developers | Programming Projects | IT Jobs',
    description: 'Software Developers | Programming Projects | IT Jobs',
    keywords: 'Software Developers, Programming Projects, IT Jobs',
}

export default Layout
