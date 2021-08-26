import React from 'react';
import PropTypes from 'prop-types';

/**
 * Each button variant has a particular function and its design signals that function to the user. It is therefore very important that the different variants are implemented consistently across products, so that they message the correct actions.
*/
export const Button = ({ state, children, onClick, classes}) => {
  let classesToRender
  switch (state) {
    case "primary":
      classesToRender = 'es--btn es--btn--primary'
      break
    case "secondary":
      classesToRender = 'es--btn es--btn--secondary'
      break
    case "tertiary":
      classesToRender = 'es--btn es--btn--tertiary'
      break
    case "danger":
      classesToRender = 'es--btn es--btn--danger'
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
  state: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
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
  state: 'primary',
  onClick: ()=>true,
};
