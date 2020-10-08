import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Link ({ as: Element, className, children, otherProps}) {
  return (
    <Element 
      className={classnames(
        'c-tag',
        className,
      )}
      {...otherProps}
    >
      {children}
    </Element>
  );
}

Link.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  className: PropTypes.string,
};

Link.defaultProps = {
  as: 'span',
  children: undefined,
  className: undefined,
};