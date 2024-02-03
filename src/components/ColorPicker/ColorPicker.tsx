import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import classNames from 'classnames/bind';
import MaskedInputPackage from 'react-text-mask';

import Button from '../Button/Button';

import { ColorPickerProps, ColorPickerState, RGBColorType } from './ColorPicker.model';
import { convertRGBAToText, convertTextToRGBA, hexToRGBA, rgbaToHex } from './ColorPicker.utils';
import { defaultColor } from './ColorPicker.const';
import { COLORS_MASK } from '../MaskedTimeInput/MaskedTimeInput.const';

import s from './ColorPicker.module.scss';

import background_chess from './chess.svg';

const cn = classNames.bind(s);

const ColorPicker: FC<ColorPickerProps> = memo((props) => {
  const {
    onChange = () => null,
    onChangeComplete = () => null,
    inputText = 'Цвет фона',
    initColor = defaultColor,
    colorType = 'rgba',
    isInputDisabled = false,
  } = props;

  const [state, setState] = useState<ColorPickerState>({
    background: '',
    backgroundText: '',
    backgroundHex: '',
    displayColorPicker: false,
    palletPosition: 'right',
  });

  const ref = useRef<HTMLDivElement>(null);

  const inputValue = useMemo(() => {
    if (colorType === 'rgba') return state.backgroundText;
    return state.backgroundHex;
  }, [colorType, state.backgroundHex, state.backgroundText]);

  const { indicatorStyles } = useMemo(() => {
    if (state.background && state.background?.a === 0) {
      return {
        indicatorStyles: {
          backgroundColor: 'transparent',
          backgroundImage: `url(${background_chess})`,
        },
      };
    }
    return {
      indicatorStyles: {
        backgroundColor: `${state.backgroundText}`,
      },
    };
  }, [state.background, state.backgroundText]);

  const handleChangePicker = useCallback(
    (color: ColorResult) => {
      const newColors = {
        background: color.rgb,
        backgroundHex: color.hex,
        backgroundText: convertRGBAToText(color.rgb),
      };
      onChange({
        rgb: newColors.background,
        text: newColors.backgroundText,
        hex: newColors.backgroundHex,
      });
      setState((prev) => ({ ...prev, ...newColors }));
    },
    [onChange],
  );

  const handleChangePickerComplete = useCallback(() => {
    onChangeComplete({
      rgb: state.background,
      text: state.backgroundText,
      hex: state.backgroundHex,
    });
  }, [onChangeComplete, state.background, state.backgroundHex, state.backgroundText]);

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let newColors = {
        backgroundText: hexToRGBA(e.target.value),
        backgroundHex: e.target.value,
        background: convertTextToRGBA(hexToRGBA(e.target.value)) || defaultColor,
      };

      if (props.colorType === 'rgba') {
        newColors = {
          backgroundText: e.target.value,
          backgroundHex: rgbaToHex(e.target.value),
          background: convertTextToRGBA(e.target.value) || defaultColor,
        };
      }

      onChange({
        rgb: newColors.background,
        text: newColors.backgroundText,
        hex: newColors.backgroundHex,
      });

      setState((prev) => ({ ...prev, ...newColors }));
    },
    [onChange, props.colorType],
  );

  const handleClickIcon = useCallback(() => {
    setState((prev) => ({
      ...prev,
      palletPosition: 'right',
      displayColorPicker: true,
    }));
  }, []);

  const handleClickPallet = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setState((prev) => ({
      ...prev,
      palletPosition: 'left',
      displayColorPicker: true,
    }));
  }, []);

  const handleClickOutside = useCallback(
    (e: Event) => {
      if (!state.displayColorPicker) return;

      if (e.target instanceof HTMLElement && !ref.current?.contains(e.target)) {
        setState((prev) => ({ ...prev, displayColorPicker: false }));
      }
    },
    [state.displayColorPicker],
  );

  useEffect(() => {
    let colorObj: RGBColorType | '';
    let colorTextRgb: string;
    let colorTextHex: string;

    if (typeof initColor === 'string') {
      colorTextHex = initColor;
      colorTextRgb = hexToRGBA(colorTextHex);
      colorObj = convertTextToRGBA(colorTextRgb) || '';
    } else {
      colorObj = initColor;
      colorTextRgb = convertRGBAToText(colorObj);
      colorTextHex = rgbaToHex(colorTextRgb);
    }

    setState((prev) => ({
      ...prev,
      background: colorObj,
      backgroundText: colorTextRgb,
      backgroundHex: colorTextHex,
    }));
  }, [initColor]);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className={cn('colorPicker')}>
      <div
        style={indicatorStyles}
        className={cn('indicator')}
        role="button"
        tabIndex={0}
        onKeyDown={() => null}
        onClick={handleClickPallet}
        aria-label="handleClickPallet"
      />

      <div
        className={cn('inputContainer')}
        role="button"
        tabIndex={0}
        onKeyDown={() => null}
        onClick={handleClickPallet}
        aria-label="handleClickPallet"
      >
        <span className={cn('inputTitle')}>{inputText}</span>

        <div
          className={cn('inputText')}
          role="button"
          tabIndex={0}
          onKeyDown={() => null}
          onClick={(e) => e.stopPropagation()}
          aria-label="handleClickPallet"
        >
          {colorType === 'hex' ? (
            <MaskedInputPackage
              className={cn('input')}
              mask={COLORS_MASK.hex}
              type="text"
              value={inputValue}
              onChange={handleChangeInput}
              disabled={isInputDisabled}
            />
          ) : (
            <input
              type="text"
              className={cn('input')}
              value={inputValue}
              onChange={handleChangeInput}
              disabled={isInputDisabled}
            />
          )}
        </div>
      </div>

      <div className={cn('icon')}>
        <Button
          iconFill
          label=""
          leftIcon="paint"
          onClick={handleClickIcon}
          product="ofd"
          size="large"
          styleType="borderless"
          theme="grey"
          type="button"
          className={cn('iconButton')}
        />
      </div>

      {state.displayColorPicker && (
        <div
          ref={ref}
          className={cn('pallet', {
            left: state.palletPosition === 'left',
            right: state.palletPosition === 'right',
          })}
        >
          <ChromePicker
            color={state.background}
            onChange={handleChangePicker}
            onChangeComplete={handleChangePickerComplete}
          />
        </div>
      )}
    </div>
  );
});

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
