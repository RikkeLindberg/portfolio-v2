import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import styles from './Experiences.module.css';

export default function Work() {
    return (
        <div className={styles.work}>
            <Heading size="3" title="Work experience" />

            <div>
                <Heading size="4" title="2011-2013" />
                <Heading size="4" title="Rema 1000 Myre" />
                <Paragraph content="Deltids ansatt, helger og ferier" />
            </div>

            <div>
                <Heading size="4" title="2013-2019" />
                <Heading size="4" title="Rema 1000 Sortland" />
                <Paragraph content="Heltids ansatt, skift- og bestillings ansvarlig" />
            </div>
        </div>
    )
}
