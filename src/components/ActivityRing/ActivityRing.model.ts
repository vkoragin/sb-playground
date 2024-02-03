import { TProductNames, TThemeNames } from '../../types';

export interface ActivityRingProps {
  progress: number;
  /* Название продукта: go, lk, ofd... */
  product: TProductNames;
  /* Показывать ли текст прогресса */
  showProgressText?: boolean;
  /* Цвет текста отражающего проценты */
  progressTextColor?: TProductNames | 'black' | 'white';
  /* Цвет активного кольца */
  progressRingColor?: TProductNames | 'black' | 'white';
  /* Тема: info, warning ... */
  theme?: TThemeNames;
}
