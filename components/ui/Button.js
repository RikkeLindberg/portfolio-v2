import PropTypes from "prop-types";

export default function Button({ children, link }) {
    return (
        <button>
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
