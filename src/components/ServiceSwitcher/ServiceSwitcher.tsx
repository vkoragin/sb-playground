import React, { FC } from 'react';
import './ServiceSwitcher.scss';
import Icon from '../Icon/Icon';
import { TIconNames, TProductNames, TThemeNames } from '../../types';

export interface IServiceSwitcher {
  serviceArr: Array<{
    label: string;
    id: string;
    iconName: TIconNames;
  }>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: string;
  product: TProductNames;
  theme: TThemeNames;
  /* data-testid */
  testId?: string;
  /* button data-testid */
  btnTestId?: string;
}

const ServiceSwitcher: FC<IServiceSwitcher> = ({
  serviceArr,
  onClick,
  onChange,
  active,
  product,
  theme,
  testId,
  btnTestId,
}) => {
  const serviceArrSlice = serviceArr.length > 4 ? [...serviceArr.slice(0, 3)] : serviceArr;

  return (
    <div className="storybook-service-switcher">
      <ul className="storybook-service-switcher__list">
        {serviceArrSlice.map((item, index) => (
          <li key={item.id} className="storybook-service-switcher__item">
            <input
              data-testid={`${testId}-${index + 1}`}
              checked={active === item.label}
              onChange={onChange}
              className="storybook-service-switcher__input"
              name="choice"
              type="radio"
              value={item.id}
              id={item.id}
            />
            <label
              htmlFor={item.id}
              className={[
                'storybook-service-switcher__btn',
                active === item.id ? 'storybook-service-switcher__btn--active' : '',
              ].join(' ')}
            >
              <Icon name={item.iconName || 'ok'} product={product} theme={theme} />
              <span className="storybook-service-switcher__text">{item.label}</span>
            </label>
          </li>
        ))}
        {serviceArr.length > 4 ? (
          <li className="storybook-service-switcher__item">
            <button data-testid={btnTestId} className="storybook-service-switcher__btn" type="button" onClick={onClick}>
              <Icon name="plus" product={product} theme={theme} />
              <span className="storybook-service-switcher__text">Еще</span>
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

ServiceSwitcher.displayName = 'ServiceSwitcher';

export default ServiceSwitcher;
