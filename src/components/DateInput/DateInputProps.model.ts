import { TPopperPlacements, TProductNames } from '../../types';

export type TypingStatuses = 'default' | 'typing' | 'complete';

export interface DateInputCallbackParams {
  from: string;
  to: string | undefined;
}
export interface DateInputProps {
  valueFrom?: string;
  valueTo?: string;
  label?: string;
  nameFrom?: string;
  nameTo?: string;
  placeholderFrom?: string;
  placeholderTo?: string;
  isRange?: boolean;
  warningMsg?: string;
  errorMsg?: string;
  isDisabled?: boolean;
  onChange?: ({ from, to }: DateInputCallbackParams) => void;
  product: TProductNames;
  /* Минимально возможная дата для выбора в формате DD.MM.YYYY Для одиночного календаря (isRange=false) */
  minDate?: Date;
  /* Максимально возможная дата для выбора в формате DD.MM.YYYY Для одиночного календаря (isRange=false) */
  maxDate?: Date;
  /* Расположение открытого окна выбора даты относительно поля ввода */
  popperPlacement?: TPopperPlacements;
}
