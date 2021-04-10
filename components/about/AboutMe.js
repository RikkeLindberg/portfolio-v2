import Heading from '../typography/Heading';
import styles from './AboutMe.module.css';

export default function AboutMe() {
    const birth = new Date('1995-02-08');
    const now = new Date();
    const difference = now - birth;
    const age = new Date(difference).getFullYear() - 1970;

    return (
        <div className={styles.about}>
            <Heading size="3" title="So who am I.." />
            <ul>
                <li>👋 I'm { age } y/o from Vesterålen, Norway</li>
                <li>✨ I will describe myself as positive, structured and hardworking.</li>
                <li>👩‍🎓 Currently a student at Noroff, studying the course Frontend Development and I'm graduating in June 2021.</li>
                <li>🔥 I have always loved creating things, for me learning new things and challenge myself is what drives me.</li>
                <li>💻 The reason for becoming a Frontend Developer is because it challenges both my creative and structural side.</li>
                <li>⛰️ Besides coding I love mountain hiking, training and dogs.</li>
            </ul>
        </div>
    )
}
                                