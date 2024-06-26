import PropTypes from 'prop-types'

const Button = ({ className, onClick, children, id }) => {
    return (
        <button data-id={id} className={className} onClick={onClick}>{children}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Button;
