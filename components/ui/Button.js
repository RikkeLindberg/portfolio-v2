import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ children, link }) {
    return (
        <button className={styles.button}>
            <a href={ link }>
                { children }
            </a>
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
	link: PropTypes.string.isRequired,
};
