import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ mode, children, onClick, classes}) => {
  let classesToRender
  switch (mode) {
    case "primary":
      classesToRender = 'button-classic'
      break
    case "secondary":
      classesToRender = 'button-secondary'
      break
    default:
      classesToRender = ''
  }
  classesToRender += ` ${classes}`
  return (
    <button
      type="button"
      className={classesToRender}
      onClick={onClick}
    >
      {children || "Button"}
    </button>
  );
};

Button.propTypes = {
  /**
   * Additional css custom classes
   */
  classes: PropTypes.string,
  /**
   * Is this the principal call to action on the page?
   */
  mode: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  classes: '',
  mode: 'primary',
  onClick: ()=>true,
};
