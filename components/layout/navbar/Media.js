import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import styles from './Media.module.css';

export default function Media() {
    return (
        <div>
            <Link href="https://github.com/RikkeLindberg">
                <a className={styles.link} target="_blank">
                    <FaGithub className={styles.icon} />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/rikkelindberg/">
                <a className={styles.link} target="_blank">
                    <FaLinkedin className={styles.icon} />
                </a>
            </Link>
        </div>
    )
}


