import { TProductNames } from '../../types';

export type TypingStatuses = 'default' | 'typing' | 'complete';

export interface TimeInputCallbackParams {
  from: string;
  to: string | undefined;
}
export interface TimeInputProps {
  valueFrom?: string;
  valueTo?: string;
  label?: string;
  nameFrom?: string;
  nameTo?: string;
  placeholderFrom?: string;
  placeholderTo?: string;
  warningMsg?: string;
  errorMsg?: string;
  isDisabled?: boolean;
  onChange?: ({ from, to }: TimeInputCallbackParams) => void;
  product: TProductNames;
}
