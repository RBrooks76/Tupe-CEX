import { memo } from 'react';
import PropTypes from 'prop-types';

const FormButton = memo(({ type, text, disabled, onClick }) => {
  const computeStyle = () => {
    const defaultClass = 'button button-purple button-medium';
    if (disabled) {
      return `${defaultClass} disabled`;
    }

    return defaultClass;
  };

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
      className={computeStyle()}
      onClick={onClick}
    >
      {text}
    </button>
  );
});

FormButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

FormButton.defaultProps = {
  disabled: false,
};

export default FormButton;
