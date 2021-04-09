import Image from 'next/image';
import Link from 'next/link';
import Heading from '../typography/Heading';

export default function Project({ title, github, link }) {
    return (
        <div>
            <Image src="/images/profile.jpg" width="300" height="300" alt={title} />
            <Heading size="3" title={title} />
            <Link href={github}><a>Github</a></Link>
            <Link href={link}><a>live demo</a></Link>
        </div>
    )
}
