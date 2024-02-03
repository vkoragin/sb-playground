import { SelectOption } from './select-option.model';
import { TIconNames, TProductNames } from '../../types';

export interface MultipleOption extends SelectOption {
  isSelected: boolean;
}

export interface ISelectProps {
  options: MultipleOption[];
  title: string;
  subTitle: string;
  onSelect: (options: MultipleOption[]) => void;
  isMultiple?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  warningMessage?: string;
  iconName?: TIconNames;
  product: TProductNames;
  /* Обводка возможной внутренней иконки */
  iconStroke: boolean;
  /* Заливка возможной внутренней иконки */
  iconFill: boolean;
  /* Направление выпадающего списка */
  dropDirection?: 'up' | 'down';
}

export default ISelectProps;
