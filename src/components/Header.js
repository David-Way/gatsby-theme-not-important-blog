import React from 'react';
import { Cluster, Link } from './index';

export default function Header ({ title }) {
  return (
    <Cluster className="c-header" as="header" justify="space-between" spacing="base">
      <Link className="c-header__title" to="/"><strong>{title}</strong></Link>
      <nav>
        <Cluster as="ul" justify="flex-start" spacing="base">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </Cluster>
      </nav>
    </Cluster>
  );
};
