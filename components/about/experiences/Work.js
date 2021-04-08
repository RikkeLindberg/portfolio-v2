import Heading from "../../typography/Heading";
import Paragraph from "../../typography/Paragraph";

export default function Work() {
    return (
        <div>
            <Heading size="2" title="Work experience" />

            <div>
                <Heading size="3" title="2011-2013" />
                <Heading size="3" title="Rema 1000" />
                <Heading size="3" title="Myre" />
                <Paragraph content="Deltids ansatt, helger og ferier" />
            </div>

            <div>
                <Heading size="3" title="2013-2019" />
                <Heading size="3" title="Rema 1000" />
                <Heading size="3" title="Sortland" />
                <Paragraph content="Heltids ansatt, skift- og bestillings ansvarlig" />
            </div>
        </div>
    )
}
