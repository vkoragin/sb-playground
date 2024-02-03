import { RGBColor } from 'react-color';

export type RGBColorType = RGBColor;

export interface ColorPickerState {
  background: RGBColorType | '';
  backgroundText: string;
  backgroundHex: string;
  displayColorPicker: boolean;
  palletPosition: 'left' | 'right';
}

export type ColorPickerHandler = {
  rgb: RGBColorType | '';
  text: string;
  hex: string;
};

export interface ColorPickerProps {
  onChange?: ({ rgb, text, hex }: ColorPickerHandler) => void;
  onChangeComplete?: ({ rgb, text, hex }: ColorPickerHandler) => void;
  inputText?: string;
  initColor?: RGBColorType | string;
  colorType?: 'rgba' | 'hex';
  isInputDisabled?: boolean;
}
