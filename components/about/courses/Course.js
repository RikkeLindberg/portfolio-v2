import PropTypes from "prop-types";
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../../typography/Heading';

export default function Course({ title, certificate, progress, courseLink }) {
    return (
        <Link href={courseLink} target="_blank">
            <a>
                <Heading size="3" title={title} />
                {certificate ? (
                <Image src={certificate} alt={title} />
                ) : (
                <div>{progress}</div>
                )}
            </a>
        </Link>
    )
}

Course.propTypes = {
    title: PropTypes.string.isRequired,
	certificate: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    courseLink: PropTypes.string.isRequired,
};
