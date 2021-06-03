import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../../typography/Heading'

export default function Course({ title, certificate, progress, courseLink }) {
    return (
            <Link href={ courseLink } target="_blank">
                <a>
                    <Heading size="4" title={ title } />
                    { certificate ? (
                    <Image src={ certificate } width="400" height="300" alt={ title } />
                    ) : (
                    <Image src={ progress } width="400" height="300" alt={ title } />
                    )}
                </a>
            </Link>
    )
}

Course.propTypes = {
    title: PropTypes.string.isRequired,
	certificate: PropTypes.string,
    progress: PropTypes.string,
    courseLink: PropTypes.string.isRequired,
};
