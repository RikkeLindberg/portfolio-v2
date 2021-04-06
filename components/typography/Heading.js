import PropTypes from "prop-types";

export default function Heading({ size = "1", title }) {
    const HeadingTag = `h${size}`;

    return (
        <HeadingTag>{title}</HeadingTag>
    )
}

Heading.propTypes = {
    size: PropTypes.string,
	title: PropTypes.string.isRequired,
};