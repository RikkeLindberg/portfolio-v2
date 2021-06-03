import Course from './Course'
import { courseData } from '../../../data/courses'
import styles from './Courses.module.css'

export default function Courses() {
    return (
        <div className={ styles.cards }>
            {courseData.map(course => (
                <Course 
                    key={ course.id }
                    title={ course.name }
                    courseLink={ course.link }
                    certificate={ course.certificate }
                    progress={ course.progress } />
            ))}
        </div>
    )
}
