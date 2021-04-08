import Courses from "../courses/Courses";
import DevProgress from "./DevProgress";
import Education from "./Education";
import Tools from "./Tools";
import Work from "./Work";


export default function Experiences() {
    return (
        <div>
            <Work />
            <Education />
            <Tools />
            <DevProgress />
            <Courses />
        </div>
    )
}
