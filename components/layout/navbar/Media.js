import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import styles from './Media.module.css';

export default function Media() {
    return (
        <div className={styles.media}>
            <Link href="https://github.com/RikkeLindberg" target="_blank">
                <a className={styles.media__link}>
                    <FaGithub className={styles.media__icon} />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/rikkelindberg/" target="_blank">
                <a className={styles.media__link}>
                    <FaLinkedin className={styles.media__icon} />
                </a>
            </Link>
        </div>
    )
}


