import React, { FC, useEffect, useState } from 'react';

import { TValResult } from './validators/types';
import {
  validateInnPerson,
  validateInnOrganisation,
  validatePassport,
  validatePassportCode,
  validateSnils,
  validateOgrn,
  validateOgrnIp,
  validateKpp,
  validateVehicleNumber,
  validatePhone,
  validateEmail,
  validateGuid,
} from './validators/mainValidators';

import { pasportCitizenMask, passportCodeMask, snilsMask } from './masks/mainMasks';
import phoneMask from './masks/phoneMask';

import './input.scss';
import Icon from '../Icon/Icon';
import { TIconNames, TProductNames, TThemeNames } from '../../types';
import { IInputProps } from './Input.model';

/**
 * IInputPropsStorybook - нужны только для отражения компонента в витрине Storybook'a
 */
export interface IInputPropsStorybook {
  type: 'text' | 'password';
  label: string;
  placeholder: string;
  product: TProductNames;
  theme?: TThemeNames;
  hintEnabled?: boolean;
  required?: boolean;
  fieldType:
    | 'default'
    | 'email'
    | 'inn'
    | 'innPerson'
    | 'innOrg'
    | 'innOrganisation'
    | 'kpp'
    | 'phone'
    | 'passport'
    | 'passportCode'
    | 'vehicleNumber'
    | 'ogrn'
    | 'ogrnIp'
    | 'date'
    | 'guid';
  icon?: TIconNames;
  iconStroke?: boolean;
  iconFill?: boolean;
  /* data-testid */
  testId?: string;
  /* button data-testid */
  btnTestId?: string;
}

const generateUniqueId = () => Math.round(Math.random() * 10000);
const uniqueId = generateUniqueId().toString();

const Input: FC<IInputProps> = ({
  name,
  value,
  inputId,
  onChange,
  type,
  label,
  placeholder,
  hintText, // TODO Возможно, стоит переименовать в "errorMessage"
  defaultValue,
  disabled,
  maxLength,
  minLength,
  fieldType,
  product,
  theme,
  icon,
  iconStroke,
  iconFill,
  iconPosition,
  passwordOpener,
  required,
  testId,
  btnTestId,
  twoLinesMode = true,
  onValidate = () => null,
  onKeyDown = () => null,
  onKeyUp = () => null,
  onBlur = () => null,
}) => {
  const [typeState, setTypeState] = useState(type);
  const [showHintState, setShowHintState] = useState(false); // // TODO Избыточно, можно привязаться только к hintText.
  const [passwordEyeType, setPasswordEyeType] = useState('eye_closed');
  const [hintMsg, setHintMsg] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);
  let keyPressed: string;
  let valResult: TValResult;
  const disabledClass = disabled ? 'storybook-input-div--disabled' : null;
  const disabledTwoLinesClass = disabled && twoLinesMode ? 'storybook-input-div--disabled-two-lines' : null;
  const inactiveClass = isInputActive || twoLinesMode ? null : 'storybook-input-div--inactive';

  useEffect(() => {
    setHintMsg(hintText || '');
    setShowHintState(!!hintText);
  }, [hintText]);

  useEffect(() => {
    onValidate(!showHintState);
  }, [onValidate, showHintState]);

  if (icon && !iconPosition) {
    iconPosition = 'left';
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(e);

    if (fieldType === 'phone') {
      keyPressed = e.key;
    }
  };

  const handleInputChange = (e: any) => {
    switch (fieldType) {
      case 'email':
        valResult = validateEmail(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'innPerson':
        valResult = validateInnPerson(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'innOrganisation':
        valResult = validateInnOrganisation(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'passport':
        pasportCitizenMask(e, e.target.value);
        valResult = validatePassport(e.target.value.replace(/[^0-9]/g, ''));

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'passportCode':
        passportCodeMask(e, e.target.value);
        valResult = validatePassportCode(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'phone':
        phoneMask(e, keyPressed);
        valResult = validatePhone(e.target.value.replace(/[^0-9]/g));

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'snils':
        snilsMask(e, e.target.value);
        valResult = validateSnils(e.target.value.replace(/[^0-9]/g, ''));

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'ogrn':
        valResult = validateOgrn(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'ogrnIp':
        valResult = validateOgrnIp(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'vehicleNumber':
        valResult = validateVehicleNumber(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'kpp':
        valResult = validateKpp(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      case 'guid':
        valResult = validateGuid(e.target.value);

        setShowHintState(!valResult.success);
        setHintMsg(!valResult.success ? valResult.error.message : hintMsg);
        break;
      default:
        break;
    }

    if (minLength) {
      setShowHintState(e.target.value.length < minLength);
      setHintMsg(hintMsg);
    }
  };

  const triggerPassword = () => {
    if (typeState === 'text') {
      setTypeState('password');
      setPasswordEyeType('eye_opened');
    } else {
      setTypeState('text');
      setPasswordEyeType('eye_closed');
    }
  };

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBlur(e);
    setIsInputActive(false);
  };

  return (
    <div
      className={[
        'storybook-input-div',
        icon && iconPosition === 'left' && 'storybook-input-main--leftimg-margin',
        disabledClass,
        disabledTwoLinesClass,
        inactiveClass,
      ].join(' ')}
    >
      <label
        htmlFor={inputId || uniqueId}
        className={['storybook-input-label', `storybook-input-label_${product}`].join(' ')}
      >
        {label}
      </label>
      {icon && iconPosition === 'left' && (
        <div className={`storybook-input-img ${iconPosition}`}>
          <Icon name={icon} theme={theme} iconFill={iconFill} iconStroke={iconStroke} product={product} />
        </div>
      )}
      <input
        data-testid={testId}
        id={inputId || uniqueId}
        name={name}
        type={typeState}
        className={[
          'storybook-input-main',
          `storybook-input-main--product-${product}`,
          theme && `storybook-input-main--theme-${theme}`,
        ].join(' ')}
        onInput={handleInputChange}
        onKeyDown={handleKeyDown}
        onKeyUp={onKeyUp}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChange={onChange}
        disabled={disabled}
        placeholder={isInputActive || twoLinesMode ? placeholder : ''}
        defaultValue={defaultValue}
        value={isInputActive ? value : ''}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
      />
      {icon && iconPosition === 'right' && (
        <div className={`storybook-input-img ${iconPosition}`}>
          <Icon name={icon} theme={theme} product={product} iconFill={iconFill} iconStroke={iconStroke} />
        </div>
      )}
      {passwordOpener && (
        <button
          type="button"
          className="storybook-input-passopener-btn"
          onClick={triggerPassword}
          data-testid={btnTestId}
          aria-label="triggerPassword"
        >
          <Icon
            name={passwordEyeType as TIconNames}
            theme={theme}
            product={product}
            iconFill={false}
            iconStroke={false}
            width="1.6rem"
            height="1.6rem"
          />
        </button>
      )}
      {showHintState && hintMsg && <p className={`storybook-input-hint-text ${theme}`}>{hintMsg}</p>}
    </div>
  );
};
export default Input;
