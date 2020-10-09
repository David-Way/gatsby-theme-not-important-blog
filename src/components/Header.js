import React from 'react';
import { Cluster, Link } from './index';

export default function Header ({ title, titleUrl, navigation }) {
  return (
    <Cluster className="c-header" as="header" justify="space-between" spacing="base">
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
