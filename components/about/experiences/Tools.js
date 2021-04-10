import { 
    SiAdobephotoshop, 
    SiAdobeillustrator, 
    SiAdobexd, SiGithub, 
    SiVisualstudiocode,
    SiFilezilla,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiBootstrap,
    SiSass,
    SiReact,
    SiNextDotJs,
    SiWordpress
} from 'react-icons/si';
import Heading from '../../typography/Heading';
import styles from './Tools.module.css';

export default function Tools() {
    return (
        <div className={styles.tools}>
            <Heading size="3" title="Tools"/>
            <div>
                <ul className={styles.list}>
                    <li><SiAdobephotoshop /></li>
                    <li><SiAdobeillustrator /></li>
                    <li><SiAdobexd /></li>
                    <li><SiGithub /></li>
                    <li><SiVisualstudiocode /></li>
                    <li><SiFilezilla /></li>
                </ul>

                <ul className={styles.list}>
                    <li><SiHtml5 /></li>
                    <li><SiCss3 /></li>
                    <li><SiJavascript /></li>
                    <li><SiBootstrap /></li>
                    <li><SiSass /></li>
                    <li><SiReact /></li>
                    <li><SiNextDotJs /></li>
                    <li><SiWordpress /></li>
                </ul>
            </div>
        </div>
    )
}
