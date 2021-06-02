import Hero from '../Hero';
import Image from 'next/image';
import styles from './Banner.module.css';

export default function Banner() {
    return (
        <section id="home" className={styles.section}>
            <div className={styles.banner}>
                <Hero className={styles.hero} />
                <Image className={styles.image} src="/images/profile2.jpg" width="300" height="300" alt="profile" />
            </div>
        </section>
    )
}
