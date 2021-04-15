import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PropTypes from "prop-types";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

export default function Project({ title, image, github, link }) {
    return (
        <div className={ styles.card }>
            <Image src={ image } width="400" height="198" alt={title} />
            <div className={ styles.links }>
                <Link href={github}><a><FaGithub />Code</a></Link>
                <Link href={link}><a><FaExternalLinkAlt />Live site</a></Link>
            </div>
        </div>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};