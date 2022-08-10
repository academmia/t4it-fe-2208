import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p> Copyright &copy; IT Projects </p>
        <p>
            <Link href='/about'>About IT Projects</Link>
        </p>
    </footer>
  )
}

export default Footer