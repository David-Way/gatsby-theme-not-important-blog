import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useObserver from '../../hooks/ResizeObserver';
 
function Reel({as: Element, spacing, children, className, ...otherProps}) {  
  const ref = useRef(null);
  const containerClass = classnames(
    'l-reel__container',
    className,
  );
  const styleClass = classnames(
    'l-reel',
    { [`l-reel--spacing:${spacing}`]: spacing },
  );

  const setIsOverflowing = (e) => {
    ref.current.classList.toggle('js-is-overflowing', ref.current.scrollWidth > ref.current.clientWidth);
  }
  useObserver({callback: setIsOverflowing, element: ref});

  return (
    <Element className={containerClass} {...otherProps}>
      <div
        ref={ref}
        className={styleClass}
      >
        {children}
      </div>
    </Element>
  );
}

Reel.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'base', 'medium', 'large', 'x-large']),
};

Reel.defaultProps = {
  as: 'div',
  spacing: undefined,
  children: undefined,
  className: undefined,
};

export default Reel;