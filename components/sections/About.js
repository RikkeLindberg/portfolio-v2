import AboutMe from "../about/AboutMe";
import Experiences from "../about/experiences/Experiences";
import Heading from "../typography/Heading";
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <Heading size="2" title="about me"/>
            <AboutMe />
            <Experiences />
        </section>
    )
}
