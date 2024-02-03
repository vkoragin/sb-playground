import { TIconNames, TIconPosition, TInputFieldTypes, TProductNames, TThemeNames } from '../../types';

export interface IInputProps {
  /* Название input-поля */
  name?: string;
  /* Значение поля */
  value?: string;
  /* id input'а */
  inputId?: string;
  /* Событие - изменение значения в input-e  */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /* Событие - нажатие клавиши  */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /* Событие - отпускание нажатой клавиши  */
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /* Событие - потеря фокуса  */
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /* Тип input'а */
  type: 'text' | 'password';
  /* Заголовок внутри поля */
  label: string;
  /* Readonly текст внутри, при пустышке */
  placeholder: string;
  /* Наложить цвета соответствующего продукта-проекта */
  product: TProductNames;
  /* Наложить цвета темы (перебивает продукт) */
  theme?: TThemeNames;
  /* Показать иконку */
  icon?: TIconNames;
  /* С какой стороны показывать иконку */
  iconPosition?: TIconPosition;
  /* Включить strok'и внутри иконки */
  iconStroke?: boolean;
  /* Включить fill'ы внутри иконки */
  iconFill?: boolean;
  /* Тип поля, накладывает внутреннее поведение */
  fieldType: TInputFieldTypes;
  /* Показывать глаз-открывашку пароля */
  passwordOpener?: boolean;
  required?: boolean;
  /* Текст подсказки под полем */
  hintText?: string;
  defaultValue?: string;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  /* data-testid */
  testId?: string;
  /* button data-testid */
  btnTestId?: string;
  /** Колбэк для передачи результатов валидации */
  onValidate?: (result: boolean) => void;
  /** Показывать и label и placeholder в неактивном инпуте */
  twoLinesMode?: boolean;
}
