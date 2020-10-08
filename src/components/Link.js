import React from 'react';
import classnames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';

export default function Link ({ className, to, children, otherProps}) {
  return (
    <GatsbyLink 
      className={classnames(
        'c-link',
        className,
      )}
      to={to}
      {...otherProps}
    >
      {children}
    </GatsbyLink>
  );
}
