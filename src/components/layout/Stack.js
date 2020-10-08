import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
 
function Stack({as: Element, spacing, children, className, ...otherProps}) {
  const styleClass = classnames(
    'l-stack',
    { [`l-stack--spacing:${spacing}`]: spacing },
  );
  
  return (
    <Element 
      className={classnames(styleClass, className)}
      {...otherProps}
    >
      {children}
    </Element>
  );
}

Stack.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'base', 'medium', 'large', 'x-large']),
};

Stack.defaultProps = {
  as: 'div',
  spacing: undefined,
  children: undefined,
  className: undefined,
};

export default Stack;