import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

export default function Media() {
    return (
        <div>
            <Link href="https://github.com/RikkeLindberg" target="_blank">
                <a>
                    <FaGithub />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/rikkelindberg/" target="_blank">
                <a>
                    <FaLinkedin />
                </a>
            </Link>
        </div>
    )
}


