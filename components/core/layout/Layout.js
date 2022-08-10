import Head from 'next/head'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({title, keywords, description, children}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
    </Head>
    
    <Header />

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
