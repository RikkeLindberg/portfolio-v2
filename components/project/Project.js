import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PropTypes from "prop-types";
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../typography/Heading';
import styles from './Projects.module.css';

export default function Project({ title, image, github, link }) {
    return (
        <div className={ styles.card }>
            <Image src={ image } width="400" height="198" alt={title} />
            <Heading size="4" title={title} />
            <div className={ styles.links }>
                <Link href={github}><a><FaGithub /></a></Link>
                <Link href={link}><a><FaExternalLinkAlt /></a></Link>
            </div>
        </div>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string
};