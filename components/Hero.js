import Button from "./ui/Button";
import Heading from "./typography/Heading";
import Paragraph from "./typography/Paragraph";

export default function Hero() {
    return (
        <div>
            <Heading size="1" title="Front end developer"/>
            <Heading size="2" title="rikke lindberg"/>
            <Paragraph content="blablabla" />
            <Button link="#portfolio">View my portfolio</Button>
        </div>
    )
}
