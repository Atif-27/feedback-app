import PropTypes from 'prop-types';
function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDisabled: false,
};
Button.protoTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.boolean,
};
export default Button;
