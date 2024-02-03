import React, { FC, useEffect, useState } from 'react';
import { TProductNames } from '../../types';

import './textarea.css';

export interface TextareaProps {
  /** data-testid */
  testId?: string;
  /** Строка над основным полем */
  label: string;
  /** Заглушка пока пользователь не ввел текст */
  placeholder: string;
  /** Цветовая тема */
  product: TProductNames;
  /** Блокировка техтареи  */
  disabled: boolean;
  /** Наличие ошибки */
  error: boolean;
  /** Наличие предупреждения */
  warning: boolean;
  /** Текст для блока подсказки в случае ошибки или предупреждения */
  helpBlockText: string;
  /** Текст подсказки под полем */
  hintText?: string;
  /* Событие - изменение значения в textarea  */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /* Событие - нажатие клавиши  */
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /* Событие - отпускание нажатой клавиши  */
  onKeyUp?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /* Событие - потеря фокуса  */
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Текст внутри */
  innerText?: string;
  /** Максимальная длина строки */
  maxLength?: number;
}

interface TextareaState {
  /** Текст внутри */
  text: string;
}

const Textarea: FC<TextareaProps> = ({
  label,
  product,
  placeholder,
  disabled,
  error,
  warning,
  helpBlockText,
  testId,
  hintText = '',
  onChange = () => null,
  onKeyDown = () => null,
  onKeyUp = () => null,
  onBlur = () => null,
  innerText = '',
  maxLength,
}) => {
  const [state, setState] = useState<TextareaState>({
    text: '',
  });

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prev) => ({ ...prev, text: e.target.value }));
    if (e.target.value.length > 0) {
      e.target.classList.add('storybook-textarea--not-empty');
    } else {
      e.target.classList.remove('storybook-textarea--not-empty');
    }
    onChange(e);
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, text: innerText }));
  }, [innerText]);

  return (
    <div
      className={[
        'storybook-textarea__wrapper',
        `storybook-textarea__wrapper--${product}`,
        error ? 'storybook-textarea--error' : null,
        warning ? 'storybook-textarea--warning' : null,
      ].join(' ')}
    >
      <textarea
        data-testid={testId}
        onInput={handleTextareaChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        value={state.text}
        maxLength={maxLength}
      />

      <label htmlFor="" className="storybook-textarea__label">
        {label}
      </label>

      {error || warning ? <span className="storybook-textarea__help-block">{helpBlockText}</span> : null}

      {hintText && <div className="storybook-textarea__hintText">{hintText}</div>}
    </div>
  );
};

export default Textarea;
