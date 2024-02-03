// TODO перенести типы в /types.ts
import { TComponentTypes, TIconPosition, TStyleTypes, TIconNames, TProductNames, TThemeNames } from '../../types';

interface IIconProps {
  /* Название иконки */
  name: TIconNames;
  /* Для какого компонента используется (button/input etc...) */
  componentType?: TComponentTypes;
  /* Стиль компонента: primary/secondary etc... */
  styleType?: TStyleTypes;
  /* Название продукта: go, lk, ofd... */
  product: TProductNames;
  /* Тема: info, warning ... */
  theme?: TThemeNames;
  /* Позиция: слева/справа */
  iconPosition?: TIconPosition;
  /* Нужен фон */
  iconFill?: boolean;
  /* Нужна обводка */
  iconStroke?: boolean;
  /* Вторичная обводка (если есть) */
  strokeSecond?: string;
  strokeThird?: string;
  /* Ширина */
  width?: string;
  /* Высота */
  height?: string;

  /* Текст над картинкой TODO не задействован */
  alt?: string;
}

export type IconType = Record<string, JSX.Element>;

export default IIconProps;
