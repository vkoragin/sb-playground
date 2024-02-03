import React, { FC } from 'react';
import './button.scss';
import './styles/primary.scss';
import Icon from '../Icon/Icon';
import { TIconNames, TProductNames, TStyleTypes, TThemeNames } from '../../types';

export interface IButtonProps {
  /* Определяет стиль кнопки(с фоном или без, есть граница или нет) */
  styleType: TStyleTypes;
  /* Размер кнопки */
  size: 'large' | 'medium';
  /* Текст кнопки */
  label: string;
  /* Тип кнопки */
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']; // TODO ButtonHTMLAttributes добавляет undefined, надо бы убрать
  /* Тема кнопки определяет основной цвет */
  product: TProductNames;
  theme: TThemeNames;
  /* Определяет дизейблить кнопку или нет */
  disabled?: boolean;
  /* Ф-ия обработчик клика */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /* Иконка слева */
  leftIcon?: TIconNames;
  /* Иконка справа */
  rightIcon?: TIconNames;
  /* Загрузка данных */
  loading?: boolean;
  /* Если кнопка с иконкой и в сайлбаре (относится к AsidePrimary & AsideSecondary) */
  aside?: boolean;
  /* Обводка возможной внутренней иконки */
  iconStroke?: boolean;
  /* Заливка возможной внутренней иконки */
  iconFill?: boolean;
  /* Ширина возможной внутренней иконки */
  iconWidth?: string;
  /* Высота возможной внутренней иконки */
  iconHeight?: string;
  /* Добавление атрибута для тестирования */
  testId?: string;
  /* Кастомный класс  */
  className?: string;
  /* Кастомные инлайн стили для кнопки  */
  buttonStyles?: React.CSSProperties;
}

/**
 * Primary UI component for user interaction
 */
const Button: FC<IButtonProps> = ({
  styleType,
  size,
  label,
  type,
  product,
  theme,
  disabled = false,
  onClick,
  leftIcon,
  loading,
  rightIcon,
  aside,
  iconStroke,
  iconFill,
  iconWidth,
  iconHeight,
  testId,
  className,
  buttonStyles,
}) => (
  <button
     
    type={type}
    disabled={disabled}
    onClick={onClick}
    data-testid={testId}
    title={label || ''}
    style={buttonStyles}
    className={[
      className,
      'storybook-button',
      `storybook-button--${size}`,
      `${aside && leftIcon ? 'storybook-button--aside' : ''}`,
      `${leftIcon || rightIcon ? 'storybook-button--icon' : ''}`,
      `storybook-button--${styleType}`,
      !label && leftIcon !== null ? 'storybook-button__without_label' : '',
      `${product}`,
      `${theme || ''}`,
    ].join(' ')}
  >
    {leftIcon && (
      <Icon
        name={leftIcon}
        product={styleType !== 'primary' && styleType !== 'aside-secondary' ? product : 'default'}
        theme={theme}
        iconFill={iconFill}
        iconStroke={iconStroke}
        width={iconWidth}
        height={iconHeight}
      />
    )}
    {label ? <span className="storybook-button--text">{label}</span> : null}
    {rightIcon && (
      <Icon
        name={rightIcon}
        product={styleType !== 'primary' && styleType !== 'aside-secondary' ? product : 'default'}
        theme={theme}
        iconFill={iconFill}
        iconStroke={iconStroke}
        width={iconWidth}
        height={iconHeight}
      />
    )}
    {loading ? <div className={['storybook-button--progress', `${product}`].join(' ')} /> : null}
  </button>
);

export default Button;
