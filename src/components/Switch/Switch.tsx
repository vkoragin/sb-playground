import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './switch.module.scss';

export interface ISwitchProps {
  /* data-testid */
  testId?: string;
  large?: boolean;
  name?: string;
  common: boolean;
  disabled?: boolean;
  isCheckedSwitch: string;
  switchDataArr: Array<{
    /* Уникальное значение для привязки инпута к лейблу */
    id: string;
    /* Значение которое будет передаваться в ф-ию "onChange" при переключение */
    value: string;
    /* Название кнопок которое будет видеть пользователь */
    label: string;
  }>;
  onChange: (e: string | null) => void;
}

const SwitchTabs: FC<ISwitchProps> = ({
  common,
  disabled = false,
  isCheckedSwitch,
  switchDataArr,
  onChange,
  testId,
  large,
  name,
}) => {
  const theme = common ? '--common' : '--accent';

  const handleKeyDownClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Space' || e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      const attr: string | null = target.getAttribute('data-attrid');
      onChange(attr);
    }
  };
  // @ts-ignore
  return (
    <div
      className={classNames(styles['switch-tabs'], {
        [styles['switch-tabs-large']]: large,
        [styles['switch-tabs--disabled']]: disabled,
      })}
    >
      {switchDataArr.map((item, index) => (
        <div
          /* eslint-disable-next-line jsx-a11y/tabindex-no-positive */
          tabIndex={1}
          role="button"
          className={[`${styles['switch-tab']}`, `${styles[`switch-tab${theme}`]}`].join(' ')}
          key={item.id}
          data-attrid={item.id}
          onKeyDown={handleKeyDownClick}
        >
          <input
            data-testid={`${testId}-${index + 1}`}
            checked={isCheckedSwitch === item.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const target = e.target as HTMLInputElement;
              const { value } = target;
              onChange(value);
            }}
            className={styles.input}
            name={name || 'choice'}
            type="radio"
            value={item.value}
            id={item.id}
            disabled={disabled}
          />
          <label className={[`${styles.label}`, `${styles[`label${theme}`]}`].join(' ')} htmlFor={item.id}>
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};
export default SwitchTabs;
