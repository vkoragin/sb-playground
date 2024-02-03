import { TPopperPlacements, TProductNames } from '../../types';

export interface RenderCustomHeaderParams {
  date: Date;
  changeYear(year: number): void;
  changeMonth(month: number): void;
  decreaseMonth(): void;
  increaseMonth(): void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  decreaseYear(): void;
  increaseYear(): void;
  prevYearButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;
}

export interface DatePickerProps {
  product: TProductNames;
  selected?: Date | null | undefined;
  /* placeholder */
  placeholder?: string;
  /* Имя поля */
  name: string;
  /* Минимальная дата */
  minDate?: Date | null | undefined;
  /* Максимальная дата */
  maxDate?: Date | null | undefined;
  /* Передача даты родителю */
  setupDate: (date: Date | null) => void;
  /* Передача данных при наборе текста */
  setupRawChange?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /* Расположение открытого окна выбора даты относительно поля ввода */
  popperPlacement?: TPopperPlacements;
}
