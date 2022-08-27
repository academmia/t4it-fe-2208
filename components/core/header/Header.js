import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        
        <div className={styles.logo}>
            <Link href='/'>
                <a>IT Projects</a>
            </Link>
        </div>

        <nav>
            <ul>
                <li>
                    <Link href='/projects'>
                        <a>Projects</a>
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header
