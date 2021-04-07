  import PropTypes from "prop-types";

export default function Paragraph({ content }) {
    return (
        <p>{content}</p>
    )
}

Paragraph.propTypes = {
	content: PropTypes.string.isRequired,
};