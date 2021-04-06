import Link from "next/link";
import Media from "./Media";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="#home"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="#about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="#portfolio"><a>Portfolio</a></Link>
                </li>
                <li>
                    <Link href="#contact"><a>Contact</a></Link>
                </li>
            </ul>
            <Media />
        </nav>
    )
}
