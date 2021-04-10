import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import styles from './Experiences.module.css';

export default function Education() {
    return (
        <div className={styles.education}>
            <Heading size="3" title="Education" />

            <div>
                <Heading size="4" title="2019-2021" />
                <Heading size="4" title="Frontend Development Online" />
                <Paragraph content="Noroff - School of Technology and Digital Media" />
            </div>

            <div>
                <Heading size="4" title="2012-2014" />
                <Heading size="4" title="Sortland VGS" />
                <Paragraph content="Realfag"/>
            </div>

            <div>
                <Heading size="4" title="2011-2012" />
                <Heading size="4" title="Sortland VGS avd Myre" />
                <Paragraph content="Studiespesialisering" />
            </div>

            <div>
                <Heading size="4" title="2001-2011" />
                <Heading size="4" title="Myre barne- og ungdomsskole" />
            </div>
        </div>
    )
}
