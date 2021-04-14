import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ link, children }) {
    return (
        <button className={styles.button}>
            <a href={ link }>
                { children }
            </a>
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
	link: PropTypes.string,
};
