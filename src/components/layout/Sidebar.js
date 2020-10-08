import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
 
function Sidebar({as: Element, padding, children, className, ...otherProps}) {
  const styleClass = classnames(
    'l-box',
    { [`l-box--padding:${padding}`]: padding },
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

Sidebar.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'base', 'medium', 'large', 'x-large']),
};

Sidebar.defaultProps = {
  as: 'div',
  padding: undefined,
  children: undefined,
  className: undefined,
};

export default Sidebar;