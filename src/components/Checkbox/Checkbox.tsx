import React, { FC, useEffect, useRef, useState } from 'react';
import './checkbox.css';
import { TProductNames } from '../../types';

export interface CheckboxProps {
  /* Текст перед чекбоксом */
  label: string;
  /* Передаваемое при клике значение */
  value: string;
  checked: boolean;
  /* Ф-ия при клике */
  onClick: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /* Цветовая тема (в зависимости от проекта) */
  product: TProductNames;
  /* Текст для блока подсказки в случае ошибки или предупреждения */
  helpBlockText: string;
  /* Наличие ошибки */
  error: boolean;
  /* Наличие предупреждения */
  warning: boolean;
  /* Активен чекбокс или нет */
  disabled: boolean;
  /* Текущий порядковый номер чекбокса (если их много и нужно выводить их номера) */
  currentIndex: number;
  /* Общее кол-во чекбоксов (если их много и нужно выводить их номера) */
  totalElements: number;
  /* data-testid */
  testId?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  value,
  checked,
  onClick,
  onKeyDown,
  product,
  helpBlockText,
  error,
  warning,
  disabled,
  currentIndex,
  totalElements,
  testId,
}) => {
  const [checkedFlag, setCheckedFlag] = useState(checked);
  const [focusFlag, setFocusFlag] = useState(false);
  const rootEl = useRef<HTMLInputElement>(null);

  const errorClass = error ? 'storybook-check--error' : null;
  const warningClass = warning ? 'storybook-check--warning' : null;
  const disabledClass = disabled ? 'storybook-check--disabled' : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedFlag(true);
      onClick(e);
    } else {
      setCheckedFlag(false);
      onClick(e);
    }
  };

  useEffect(() => {
    const onAwayRootElClick = (e: MouseEvent) => {
      if (!rootEl.current!.contains(e.target as Node)) {
        setFocusFlag(false);
      }
    };

    document.addEventListener('click', onAwayRootElClick);
    return () => document.removeEventListener('click', onAwayRootElClick);
  }, []);

  useEffect(() => {
    setCheckedFlag(checked);
  }, [checked]);

  const onFocus = () => {
    setFocusFlag(true);
  };

  const onBlur = () => {
    setFocusFlag(false);
  };

  const handleCheckboxOutlineChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && focusFlag) {
      if (!checkedFlag) {
        setCheckedFlag(true);
        onKeyDown(e);
        e.currentTarget.checked = true;
      } else {
        setCheckedFlag(false);
        onKeyDown(e);
        e.currentTarget.checked = false;
      }
    }
  };

  return (
    <label
      htmlFor={`checkbox-${value}`}
      className={[
        'storybook-check',
        `storybook-check--${product}`,
        checkedFlag ? 'storybook-check--checked' : null,
        focusFlag ? 'storybook-check--focus' : null,
        errorClass,
        warningClass,
        disabledClass,
      ].join(' ')}
    >
      <input
        checked={checkedFlag}
        data-testid={testId}
        type="checkbox"
        id={`checkbox-${value}`}
        ref={rootEl}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleCheckboxOutlineChange}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        className={['storybook-check__input', `storybook-check__input--${product}`].join(' ')}
        name={`checkbox-${value}`}
      />
      {label}
      <span className="storybook-check__box" />
      {currentIndex ? (
        <span className="storybook-check__item-number">
          <span>{currentIndex}</span> /<span>{totalElements}</span>
        </span>
      ) : null}
      {error || warning ? <span className="storybook-check__help-block">{helpBlockText}</span> : null}
    </label>
  );
};

export default Checkbox;
