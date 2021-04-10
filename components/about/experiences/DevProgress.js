import Heading from '../../typography/Heading';
import styles from './DevProgress.module.css';

export default function DevProgress() {
    return (
        <div className={styles.progressBars}>
            <Heading size="3" title="Development"/>
            <div>
                <div className={styles.progress}>
                    <div className={styles.progressTitle}>
                        <span>HTML</span>
                    </div>
                    <div className={`${styles.progressLine} ${styles.html}`}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.progress}>
                    <div className={styles.progressTitle}>
                        <span>CSS</span>
                    </div>
                    <div className={`${styles.progressLine} ${styles.css}`}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.progress}>
                    <div className={styles.progressTitle}>
                        <span>Sass</span>
                    </div>
                    <div className={`${styles.progressLine} ${styles.sass}`}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.progress}>
                    <div className={styles.progressTitle}>
                        <span>JS</span>
                    </div>
                    <div className={`${styles.progressLine} ${styles.js}`}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.progress}>
                    <div className={styles.progressTitle}>
                        <span>React</span>
                    </div>
                    <div className={`${styles.progressLine} ${styles.react}`}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.progress}>
                    <div className={styles.progressTitle}>
                        <span>Next</span>
                    </div>
                    <div className={`${styles.progressLine} ${styles.next}`}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.progress}>
                    <div className={styles.progressTitle}>
                        <span>TypeScript</span>
                    </div>
                    <div className={`${styles.progressLine} ${styles.ts}`}>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
