import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";

export default function AboutMe() {
    const birth = new Date('1995-02-08');
    const now = new Date();
    const difference = now - birth;
    const age = new Date(difference).getFullYear() - 1970;

    return (
        <div>
            <Heading size="3" title="hello" />
            <Paragraph content={"i am " + age + " y/o"} />
        </div>
    )
}
