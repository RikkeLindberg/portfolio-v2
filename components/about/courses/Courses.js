import Course from './Course';
import Heading from '../../typography/Heading';
import { courseData } from '../../../data/courses';

export default function Courses() {
    return (
        <div>
            <Heading size="2" title="Courses"/>
            {courseData.map(course => (
                <Course 
                    key={course.id}
                    title={course.name}
                    courseLink={course.link}
                    certificate={course.certificate}
                    progress={course.progress} />
            ))}
        </div>
    )
}
