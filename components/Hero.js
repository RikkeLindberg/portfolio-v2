import Button from './ui/Button'
import Heading from './typography/Heading'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={ styles.hero }>
            <Heading size="1" title="Rikke lindberg"/>
            <Heading size="2" title="Front-end developer"/>
            <Button link="#portfolio">View my portfolio</Button>
        </div>
    )
}
