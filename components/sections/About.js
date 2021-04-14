import AboutMe from "../about/AboutMe";
import Experiences from "../about/experiences/Experiences";
import Heading from "../typography/Heading";

export default function About() {
    return (
        <section id="about">
            <Heading size="2" title="about"/>
            <AboutMe />
            <Experiences />
        </section>
    )
}
