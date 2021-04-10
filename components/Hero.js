import Button from './ui/Button';
import Heading from './typography/Heading';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Heading size="1" title="Rikke Lindberg"/>
            <Heading size="2" title="Front-End Developer"/>
            <Button link="#portfolio">View my portfolio</Button>
        </div>
    )
}
