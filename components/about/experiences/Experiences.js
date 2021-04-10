import Courses from '../courses/Courses';
import DevProgress from './DevProgress';
import Education from './Education';
import Tools from './Tools';
import Work from './Work';
import styles from './Experiences.module.css';


export default function Experiences() {
    return (
        <div className={styles.experiences}>
            <div className={styles.grid}>
                <Work />
                <Education />
            </div>
            <Tools />
            <DevProgress />
            <Courses />
        </div>
    )
}
