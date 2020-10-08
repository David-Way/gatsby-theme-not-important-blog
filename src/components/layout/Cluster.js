import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
 
function Cluster({as: Element, spacing, justify, align, children, className, ...otherProps}) {
  const styleClass = classnames(
    'l-cluster',
    { [`l-cluster--spacing:${spacing}`]: spacing },
    { [`l-cluster--justify:${justify}`]: justify },
    { [`l-cluster--align:${align}`]: align },
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

Cluster.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'base', 'medium', 'large', 'x-large']),
  justify: PropTypes.oneOf(['normal', 'start', 'flex-start', 'end', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  align: PropTypes.oneOf(['stretch', 'center', 'start', 'end']),
};

Cluster.defaultProps = {
  as: 'div',
  spacing: undefined,
  justify: 'center',
  align: 'center',
  children: undefined,
  className: undefined,
};

export default Cluster;