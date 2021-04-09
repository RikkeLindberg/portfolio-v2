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
} from "react-icons/si";
import Heading from "../../typography/Heading";

export default function Tools() {
    return (
        <div>
            <Heading size="2" title="Tools"/>

            <ul>
                <li><SiAdobephotoshop />Adobe Photoshop</li>
                <li><SiAdobeillustrator />Adobe Illustrator</li>
                <li><SiAdobexd />Adobe XD</li>
                <li><SiGithub />Github</li>
                <li><SiVisualstudiocode />Visual Studio Code</li>
                <li><SiFilezilla />Filezilla</li>
            </ul>

            <ul>
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
    )
}
