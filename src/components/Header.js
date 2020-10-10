import React from 'react';
import classnames from 'classnames';
import { Cluster, Link } from './index';

export default function Header ({ className, title, titleUrl, navigation }) {
  const styleClass = classnames(
    'c-header',
    className,
  );

  return (
    <Cluster className={styleClass} as="header" justify="space-between" spacing="base">
      <Link className="c-header__title" to={titleUrl}><strong>{title}</strong></Link>
      <nav>
        <Cluster as="ul" justify="flex-start" spacing="base">
          {navigation && navigation.map((route) => (
            <li key={route.title}>
              <Link to={route.url}>{route.title}</Link>
            </li>
          ))}
        </Cluster>
      </nav>
    </Cluster>
  );
};
