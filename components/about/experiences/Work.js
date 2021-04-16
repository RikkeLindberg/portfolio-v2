import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import styles from './Experiences.module.css';

export default function Work() {
    return (
        <div className={styles.container}>
            <Heading size="3" title="Work experience" />

            <div className={styles.column}>
                <Heading size="4" title="2013-2019" />
                <Heading size="4" title="Rema 1000 Sortland" />
                <Paragraph content="Full-time employee, shift and order manager" />
            </div>

            <div className={styles.column}>
                <Heading size="4" title="2011-2013" />
                <Heading size="4" title="Rema 1000 Myre" />
                <Paragraph content="Part-time employee, weekends and holidays" />
            </div>
        </div>
    )
}
