import cn from 'classnames';
import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Icon from '../Icon/Icon';
import DatePicker from '../DatePicker/DatePicker';

import { FIRST_DAY_OF_YEAR, INPUT_LENGTH, LAST_DAY_OF_YEAR } from './DateInput.const';

import { DateInputProps, TypingStatuses } from './DateInputProps.model';

import s from './DateInput.module.scss';

const stringToNewDate = (strDate: string) => {
  const [day, month, year] = strDate.split('.');
  const newDate = new Date(+year, +month - 1, +day);
  return new Date(newDate);
};

const DateInput: FC<DateInputProps> = memo((props) => {
  const {
    valueFrom,
    valueTo,
    product = 'default',
    label = 'Период',
    nameFrom = '',
    nameTo = '',
    placeholderFrom = FIRST_DAY_OF_YEAR,
    placeholderTo = LAST_DAY_OF_YEAR,
    isRange = false,
    warningMsg = '',
    errorMsg = '',
    isDisabled = false,
    minDate = null,
    maxDate = null,
    onChange = () => null,
    popperPlacement = 'bottom-start',
  } = props;

  const [dateFrom, setDateFrom] = useState(valueFrom || '');
  const [dateTo, setDateTo] = useState(valueTo || '');
  const [isInputsVisible, setIsInputsVisible] = useState(false);

  const ref = useRef(null);

  const typingStatus = useMemo<TypingStatuses>(() => {
    const dateFromLength = dateFrom.match(/\d/g)?.length ?? 0;
    const dateToLength = dateTo.match(/\d/g)?.length ?? 0;
    const allLength = isRange ? dateFromLength + dateToLength : dateFromLength;
    const maxLength = INPUT_LENGTH * (isRange ? 2 : 1);

    if (allLength > 0 && allLength < maxLength) {
      return 'typing';
    }
    if (allLength === maxLength) {
      return 'complete';
    }
    return 'default';
  }, [dateFrom, dateTo, isRange]);

  const handleClick = useCallback(() => {
    if (!isDisabled) setIsInputsVisible(true);
  }, [isDisabled]);

  const handleChangeFrom = useCallback((date: Date | null) => {
    setDateFrom(date ? new Date(date).toLocaleDateString() : '');
  }, []);

  const handleChangeTo = useCallback((date: Date | null) => {
    setDateTo(date ? new Date(date).toLocaleDateString() : '');
  }, []);

  const handleTypingFrom = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!event.target.value) return;
    setDateFrom(event.target.value);
  }, []);

  const handleTypingTo = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!event.target.value) return;
    setDateTo(event.target.value);
  }, []);

  const handleClear = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDateFrom('');
    setDateTo('');
  }, []);

  useEffect(() => {
    if (dateFrom || dateTo) {
      setIsInputsVisible(true);
    }
    if (!dateFrom && !dateTo) {
      setIsInputsVisible(false);
    }
  }, [dateFrom, dateTo]);

  useEffect(() => {
    onChange({
      from: dateFrom,
      to: dateTo,
    });
  }, [dateFrom, dateTo, onChange]);

  useEffect(() => {
    if (valueFrom !== undefined) setDateFrom(valueFrom);
  }, [valueFrom]);

  useEffect(() => {
    if (valueTo !== undefined) setDateTo(valueTo);
  }, [valueTo]);

  return (
    <div
      className={cn(s.dateInput, {
        [s.range]: isRange,
        [s.error]: errorMsg,
        [s.warning]: warningMsg,
        [s.disabled]: isDisabled,
        [product]: product,
        [s.typingStatus__default]: typingStatus === 'default',
        [s.typingStatus__typing]: typingStatus === 'typing' && isInputsVisible,
        [s.typingStatus__cpomplete]: typingStatus === 'complete',
      })}
    >
      <div ref={ref} className={s.inputs} onClick={handleClick} role="button" onKeyDown={() => null} tabIndex={0}>
        <div className={s.left}>
          <Icon name="calendarWithCorner" product={product} />
        </div>

        <div className={s.center}>
          <div className={s.title}>{label}</div>

          {isInputsVisible && (
            <div className={s.dates}>
              <DatePicker
                product={product}
                selected={dateFrom === '' ? null : new Date(dateFrom)}
                placeholder={placeholderFrom}
                name={nameFrom}
                setupDate={handleChangeFrom}
                setupRawChange={handleTypingFrom}
                minDate={minDate || null}
                maxDate={maxDate || (dateTo ? stringToNewDate(dateTo) : new Date())}
                popperPlacement={popperPlacement}
              />

              {isRange && (
                <>
                  <div
                    className={cn(s.delimiter, {
                      [s.delimiter__cpomplete]: typingStatus === 'complete',
                    })}
                  >
                    —
                  </div>
                  <DatePicker
                    product={product}
                    selected={dateTo === '' ? null : new Date(dateTo)}
                    name={nameTo}
                    placeholder={placeholderTo}
                    setupDate={handleChangeTo}
                    setupRawChange={handleTypingTo}
                    minDate={dateFrom ? stringToNewDate(dateFrom) : null}
                    maxDate={maxDate || (dateTo ? stringToNewDate(dateTo) : new Date())}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {(warningMsg || errorMsg) && (
          <div className={s.right}>
            {errorMsg && <Icon name="exclamation" product="gosotchet" theme="error" />}

            {warningMsg && <Icon name="exclamationTriangle" product="gosotchet" theme="warning" />}
          </div>
        )}

        {(!!dateFrom || !!dateTo) && (
          <button type="button" className={cn(s.clear)} onClick={handleClear} aria-label="handleClear">
            <Icon name="plus" product="gosotchet" />
          </button>
        )}
      </div>

      {(warningMsg || errorMsg) && (
        <div className={s.messages}>
          {warningMsg && <div className={s.messages_warning}>{warningMsg}</div>}
          {errorMsg && <div className={s.messages_error}>{errorMsg}</div>}
        </div>
      )}
    </div>
  );
});

DateInput.displayName = 'DateInput';

export default DateInput;
