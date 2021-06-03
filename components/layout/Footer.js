import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={ styles.footer }>
          <small>{ currentYear } &copy; Rikke Lindberg. All rights reserved.</small>
        </footer>
    )
}
