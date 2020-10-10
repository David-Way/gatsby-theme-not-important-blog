import React from 'react';
import classnames from 'classnames';
import Stack from './layout/Stack';

export default function Card ({ className, to, title, meta, body}) {
  const styleClass = classnames(
    'c-card',
    className,
  );
  
  return (
    <article className={styleClass}>
      <a className="c-card__link" href={to}>
        <Stack spacing="small">
          <header>
            <Stack spacing="x-small">
              <h3 className="c-card__title">
                {title}
              </h3>
              {meta && (
                <small className="c-card__meta">
                  {meta.join(' • ')}
                </small>
              )}
            </Stack>
          </header>
          <p className="c-card__body">
            {body}
          </p>
        </Stack>
      </a>
    </article>
  );
}
