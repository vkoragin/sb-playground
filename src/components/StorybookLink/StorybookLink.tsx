import React from 'react';
import { TProductNames } from '../../types';

import './StorybookLink.scss';

export interface IStorybookLink {
  /* data-testid */
  testId?: string;
  /* source link */
  href: string;
  /* Техт ссылки */
  label: string;
  /* Тема кнопки определяет основной цвет */
  product: TProductNames;
  /* Параметр открытия ссылки */
  target: '_blank' | '_self' | '_parent' | '_top';
}

const StorybookLink: React.FC<IStorybookLink> = ({
  href,
  label,
  product,
  target,
  testId,
}) => (
  <a
    data-testid={testId}
    target={target}
    className={['storybook-link', `storybook-link__${product}`].join(' ')}
    href={href}
  >
    {label}
  </a>
);

export default StorybookLink;
