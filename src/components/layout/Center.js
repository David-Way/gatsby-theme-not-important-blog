import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
 
function Center({as: Element, children, className, ...otherProps}) {
  const styleClass = classnames(
    'l-center',
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

Center.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  className: PropTypes.string,
};

Center.defaultProps = {
  as: 'div',
  children: undefined,
  className: undefined,
};

export default Center;