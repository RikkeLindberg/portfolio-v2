import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import styles from './Media.module.css';

export default function Media() {
    return (
        <div>
            <Link href="https://github.com/RikkeLindberg" target="_blank">
                <a className={styles.link}>
                    <FaGithub className={styles.icon} />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/rikkelindberg/" target="_blank">
                <a className={styles.link}>
                    <FaLinkedin className={styles.icon} />
                </a>
            </Link>
        </div>
    )
}


