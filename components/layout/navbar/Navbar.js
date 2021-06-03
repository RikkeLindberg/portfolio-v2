import Link from 'next/link'
import { useRouter } from 'next/router'
import Media from './Media'
import styles from './Navbar.module.css'

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className={ styles.nav }>
            <input type="checkbox" id="toggle-nav" className={ styles.toggle__nav } />
            <label htmlFor="toggle-nav" className={ styles.nav__toggle }>
                <span className={ styles.navtoggle__icon }>&nbsp;</span>
            </label>

            <ul className={ styles.nav__list }>
                <li>
                    <Link href="#home">
                        <a className={ styles.nav__link }>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <a className={ styles.nav__link }>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="#portfolio">
                        <a className={ styles.nav__link }>Portfolio</a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <a className={ styles.nav__link }>Contact</a>
                    </Link>
                </li>
            </ul>
            <Media />
        </nav>
    )
}
