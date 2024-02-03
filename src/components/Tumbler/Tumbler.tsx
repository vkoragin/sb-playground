import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { TProductNames } from '../../types';

import styles from './Tumbler.module.scss';

export interface ITumblerProps {
  /** Продукт влияет на выбор цвета */
  product: TProductNames;
  /** Функция вызывающаяся при переключении тумблера */
  onChange: (isChecked: boolean) => void;
  /** Активирован ли тумблер по умолчанию */
  isActive?: boolean;
  /** Заблокирован ли тумблер по умолчанию */
  isDisabled?: boolean;
  /** ID для тестов */
  testId?: string;
}

interface ITumblerState {
  /** Активирован ли тумблер */
  isChecked: boolean;
}

const Tumbler: FC<ITumblerProps> = ({
  product,
  isActive = false,
  isDisabled = false,
  onChange,
  testId = `tumbler-test-id`,
}) => {
  const [state, setState] = useState<ITumblerState>({
    isChecked: false,
  });
  const uniqCompId = uuidv4();

  useEffect(() => setState((prev) => ({ ...prev, isChecked: isActive })), [isActive]);

  const { labelColors } = useMemo(
    () => ({
      labelColors: state.isChecked
        ? {
            backgroundColor: `var(--${product.toUpperCase()}_Primary_Color)`,
            borderColor: `var(--${product.toUpperCase()}_Primary_Middle)`,
          }
        : {},
    }),
    [state.isChecked, product],
  );

  const { centerColors } = useMemo(
    () => ({
      centerColors: state.isChecked
        ? {
            backgroundColor: `var(--${product.toUpperCase()}_Primary_Color)`,
            borderColor: `var(--${product.toUpperCase()}_Primary_Color)`,
          }
        : {},
    }),
    [state.isChecked, product],
  );

  const handleClick = useCallback(() => {
    setState((prev) => {
      const newResult = !prev.isChecked;
      onChange(newResult);
      return { ...prev, isChecked: newResult };
    });
  }, [onChange]);

  return (
    <div
      className={cn(styles.tumbler, styles[product], {
        [styles.disabled]: isDisabled,
        [styles.product]: product,
      })}
    >
      <input
        id={uniqCompId}
        type="checkbox"
        data-testid={testId}
        onChange={handleClick}
        disabled={isDisabled}
        checked={state.isChecked}
      />
      <label htmlFor={uniqCompId} style={labelColors}>
        <span className={styles.handler}>
          <span className={styles.center} style={centerColors} />
        </span>
      </label>
    </div>
  );
};

export default Tumbler;
